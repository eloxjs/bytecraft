import appConfig from "../config/app-config";
import ExceptionHandlerMiddleware from "../middlewares/exception-handler";
import PageMetaDataMiddleware from "../middlewares/page-metadata";
import ExceptionRenderer from "./exception-renderer";

const Router = new class Router {
    /**
     * Core properties for route management:
     * - `uriPrefix` defines any base path or subdirectories for routes.
     * - `routes` contains all the registered routes for the application.
     * - `previousState` captures the last routing state for potential navigation tracking or route reverting.
     */
    private uriPrefix: {prefix:string, paramPatterns:Route['paramPatterns']}[] = [];
    private routeList: Route[] = [];
    private previousState: RouteStateData | null = null;

    /**
     * Represents a stack of active middlewares.
     * When routes are being defined inside a middleware wrapper, the middlewares are added to this stack.
     * This allows routes to be associated with middlewares that are currently in scope.
     * The stack follows a LIFO (Last-In-First-Out) pattern, meaning that middlewares are 
     * pushed to the stack when they become active and are popped off once they are out of scope.
     */
    private activeMiddlewareStack: (Middleware|Middleware[])[] = [];

    /**
     * globalMiddlewares:
     * An array to store middlewares that are applied globally, i.e., to all routes.
     * These middlewares will be executed for every route transition in the order
     * they are added to this array.
     */
    private globalMiddlewares: Middleware[] = [];

    /**
     * routeMiddlewares:
     * An object where each key is a route ID and the associated value is an array of 
     * middlewares specific to that route. These middlewares are executed only when
     * their associated route is being processed. The execution order is based on the
     * order they are added for the specific route.
     */
    private routeMiddlewares: Record<string, Middleware[]> = {};

    public defaultFetchPageData:boolean = false;

    // private historyEntries:{url:string, state:string|null}[] = [];

    // ===================================
    // Constructor and Initialization
    // ===================================

    constructor() {
        window.addEventListener('popstate', this.handleBrowserNavigation.bind(this));

        this.useGlobalMiddleware(PageMetaDataMiddleware, ExceptionHandlerMiddleware);

        // this.historyEntries.push({
        //     url: window.location.href,
        //     state: window.history.state
        // });
    }

    /**
     * Handles browser's back or forward navigation events.
     *
     * This function is triggered when a user clicks the back or forward buttons
     * in the browser. It checks whether the newly navigated URL differs from 
     * the previously stored state. If they differ, it proceeds to load the
     * associated route.
     */
    private handleBrowserNavigation() {
        // Retrieve the current URL's path.
        const currentPath = window.location.pathname;
        const currentURL = new URL(currentPath, window.location.href);

        // If the new URL is the same as the previous state URL, no further action is needed.
        if (this.previousState && this.doURLsMatch(this.previousState.url, currentURL)) return;

        // Load the route associated with the new URL.
        this.processCurrentRoute(null, 'traverse');

        // const lastEntry = this.historyEntries[this.historyEntries.length - 1];
        // const currentUrl = window.location.href;
        // const currentState = window.history.state;

        // if (currentUrl === lastEntry.url && currentState === lastEntry.state) {
        //     // Both state and URL are the same
        //     console.log("Duplicate state and URL detected.");
        //     // Handle this case as per your application logic or simply return
        // } else if (this.historyEntries.some(entry => entry.url === currentUrl)) {
        //     console.log('backward');
        //     // Backward navigation detected
        //     this.historyEntries.pop();
        // } else {
        //     console.log('forward');
        //     // Forward navigation detected
        //     this.historyEntries.push({ url: currentUrl, state: currentState });
        // }
    }




    // ===================================
    // Route Manipulation and Navigation
    // ===================================

    /**
     * Navigates to the given path in the application.
     * 
     * @param destination - The target path for navigation.
     * @param metadata - Optional data or parameters for the route.
     */
    public navigate(destination: string, metadata:LoadRequest['metadata'] = null, optional?:LoadRequest['optional']) {
        // Avoid re-pushing the same path to the history
        // if(this.previousState && this.doURLsMatch(this.previousState.url, new URL(destination, window.location.href))) return;

        // let targetRoute = this.findRouteByPath(destination);
        // let routeId = targetRoute ? targetRoute.id : this.generateRouteId();

        if (appConfig.isSinglePageApplication) {
            const uniqueState = this.generateRouteId() + new Date().getTime().toString();
            window.history.pushState(uniqueState, document.title, destination);
            // this.historyEntries.push({ url: window.location.href, state: uniqueState });
        } else {
            window.location.href = destination;
            return;
        }

        this.processCurrentRoute(metadata, 'push', optional);
    }

    /**
     * Redirects to the given path in the application, replacing the current history entry.
     * 
     * @param destination - The target path for redirection.
     * @param metadata - Optional data or parameters for the route.
     */
    public redirect(destination: string, metadata:LoadRequest['metadata'] = null, optional?:LoadRequest['optional']) {
        let targetRoute = this.findRouteByPath(destination);
        let routeId = targetRoute ? targetRoute.id : this.generateRouteId();

        if (appConfig.isSinglePageApplication) {
            window.history.replaceState(routeId, document.title, destination);
        } else {
            window.location.replace(destination);
        }

        this.processCurrentRoute(metadata, 'replace', optional);
    }

    /**
     * Checks if a route with the given ID exists.
     * 
     * @param id - The ID of the route to check.
     * @returns `true` if the route exists, otherwise `false`.
     */
    public hasRoute(id: Route['id']): boolean {
        return Boolean(this.findRouteById(id));
    }

    /**
     * Retrieves the complete route URL based on the provided route ID and parameters.
     * Internally, this function relies on `getRouteURLOrFail` which ensures that
     * if the route ID is not found, an error is thrown.
     * 
     * Essentially, this function serves as a public interface to safely fetch
     * route URLs while encapsulating the internal mechanics of URL generation.
     * 
     * @param routeId - Identifier of the desired route.
     * @param routeParams - Parameters to be integrated into the route's placeholders.
     * @returns - A fully constructed URL based on the given route ID and parameters.
     * @throws - Error if the route with the specified ID doesn't exist.
     */
    public route(routeId:Route['id'], routeParams: RouteParams): string {
        return this.getRouteURLOrFail(routeId, routeParams);
    }

    /**
     * Retrieves the route URL based on the given route ID and parameters.
     * If the route ID is not found, it throws an error indicating the
     * absence of the specified route.
     * 
     * @param routeId - Identifier for the desired route.
     * @param routeParams - Parameters needed to populate the route placeholders.
     * @returns - Constructed URL for the given route and parameters.
     * @throws - Error if the route with the specified ID doesn't exist.
     */
    private getRouteURLOrFail(routeId: Route['id'], routeParams?: RouteParams): string {
        let url = this.getRouteURL(routeId, routeParams);
        if(url === null) throw new Error(`Undefined route id (${routeId})`);
        return url;
    }

    /**
     * Tries to construct the route URL based on the given route ID and parameters.
     * It retrieves the route definition using the provided ID and then populates 
     * the URI template with the supplied parameters.
     * 
     * If the route ID is not found in the route definitions, it returns null.
     * 
     * @param routeId - Identifier for the desired route.
     * @param routeParams - Parameters needed to populate the route placeholders.
     * @returns - Constructed URL for the given route and parameters, or null if the route ID isn't found.
     */
    private getRouteURL(routeId: Route['id'], routeParams?: RouteParams): string | null {
        const route = this.findRouteById(routeId);
        if (!route) return null;

        const { path: routePath } = route;
        const routeParamMap = this.mapValuesToURITemplate(routePath, routeParams);
        const populatedURI = this.populateURITemplate(routePath, routeParamMap);

        return new URL(populatedURI, window.location.href).href;
    }

    /**
     * Maps the provided route parameters to their corresponding placeholders in the route path.
     * This function creates a mapping between the route placeholders and the supplied route parameters.
     * If an array of parameters is provided, it matches the order of placeholders in the route path.
     * If a non-array parameter set is provided, it directly returns the set.
     * 
     * @param routePath - The route template containing placeholders (e.g., '/user/{id}').
     * @param routeParams - Route parameters provided as either an array or an object.
     * @returns - An object mapping each placeholder in the route to its corresponding value.
     */
    private mapValuesToURITemplate(routePath: string, routeParams?: RouteParams): Record<string, string> {
        const placeholders = Array.from(routePath.matchAll(/{([^}?]+)\??}/g)).map(match => match[1]);

        if (!routeParams || !routeParams.length) return {};

        if (!Array.isArray(routeParams)) {
            return routeParams;
        }

        const matchedParams: Record<string, string> = {};
        routeParams.forEach((value, index) => {
            if (placeholders[index]) {
                matchedParams[placeholders[index]] = value;
            }
        });

        return matchedParams;
    }

    /**
     * Populates the route path (URI template) using the provided route parameters.
     * The function replaces each placeholder in the route path with the corresponding value from the route parameters.
     * Additionally, this function checks if a value adheres to custom regex patterns (if provided) and throws an error if there's a mismatch.
     * 
     * @param routePath - The route template containing placeholders (e.g., '/user/{id}').
     * @param routeParams - A map of placeholders to their corresponding values.
     * @param customPatterns - Custom regex patterns to validate the parameter values against (optional).
     * @returns - A populated URI with the placeholders replaced by actual values.
     * @throws - Error if a parameter value doesn't match its corresponding custom pattern or if a required parameter is missing.
     */
    private populateURITemplate(routePath: string, routeParams: Record<string, string>, customPatterns: Record<string, string> = {}): string {
        return routePath.replace(/(\/)?{([^}?]+)(\?)?}/g, (match, precedingSlash, paramName, isOptional) => {
            const paramValue = routeParams[paramName];
            const definedPattern = customPatterns[paramName];

            if (paramValue) {
                if (definedPattern && !new RegExp(`^${definedPattern}$`).test(paramValue)) {
                    throw new Error(`Param '${paramName}' doesn't match the defined pattern ${definedPattern}`);
                }
        
                return (precedingSlash || '') + paramValue;
            }

            if (isOptional && precedingSlash) {
                return ''; 
            }

            if (!isOptional) {
                throw new Error(`Required parameter '${paramName}' is missing for route URI: '${routePath}'.`);
            }

            return match;
        });
    }




    // ===================================
    // Managing Route Base Paths & Actions
    // ===================================


    /**
     * Adds a prefix to the list of URI prefixes, optionally executes a callback, 
     * and then ends the prefix.
     *
     * @param routePrefix - The prefix to be added to the URI prefixes.
     * @param callback - Optional callback function to be executed after adding the prefix.
     */
    public prefix(routePrefix: string, callback?: () => void): PrefixConfiurator {
        let newPrefix:typeof this.uriPrefix[number] = {
            prefix: routePrefix,
            paramPatterns: {}
        };

        this.uriPrefix.push(newPrefix);
        if (callback) {
            callback();
            this.endPrefix();
        }

        const prefixConfiurator: PrefixConfiurator = {
            paramPattern(paramOrPatterns, regexPattern?:string) {
                if(typeof paramOrPatterns === 'string') {
                    newPrefix.paramPatterns[paramOrPatterns] = regexPattern!;
                }else {
                    Object.entries(paramOrPatterns).forEach(([param, regexPattern]) => {
                        newPrefix.paramPatterns[param] = regexPattern;
                    })
                }
                return prefixConfiurator;
            }
        }

        return prefixConfiurator;
    }

    /**
     * Removes the latest prefix from the list of URI prefixes.
     */
    public endPrefix(): void {
        this.uriPrefix.pop();
    }

    /**
     * Adds a new route to the list of routes with actions for loading and unloading.
     *
     * @param uriSegment - The segment of the URI for the route.
     * @param load - Controller or function to execute when the route is loaded.
     * @param unload - Optional controller or function to execute when the route is unloaded.
     * @returns A route configurator to allow for chaining configurations.
     */
    public addRoute(uriSegment: string, load: string | Function, unload?: string | Function) {
        // Construct the full URI by combining the prefix and the provided URI segment.
        const fullUri = [...this.uriPrefix.map(i => i.prefix), uriSegment]
            .map(segment => this.cleanRouteURI(segment))
            .filter(Boolean)
            .join('/');
        const formattedUri = fullUri.startsWith('/') ? fullUri : '/' + fullUri;
        const paramPatternsStorage:Route['paramPatterns'][] = [{}, ...this.uriPrefix.map(i => i.paramPatterns)];

        // Create the route object.
        const newRoute: Route = {
            id: this.generateRouteId(),
            path: formattedUri,
            get paramPatterns () {
                return Object.assign({}, ...paramPatternsStorage);
            },
            set paramPatterns(paramPatterns:Route['paramPatterns']) {
                Object.entries(paramPatterns).forEach(([paramName, pattern]) => {
                    paramPatternsStorage[0][paramName] = pattern;
                });
            },
            actions: {
                load: load,
                unload: unload
            },
            parentRouteId: null,
            hasPageData: null
        };

        newRoute.paramPatterns

        this.useRouteMiddleware(newRoute.id, ...this.activeMiddlewareStack.flat(1));
        const $this = this;
        // Setup helper to allow for chaining configurations.
        const routeConfigurator:RouteConfigurator = {
            id(id) {
                let oldId = newRoute.id;
                if(oldId in $this.routeMiddlewares) {
                    $this.routeMiddlewares[id] = $this.routeMiddlewares[oldId];
                    delete $this.routeMiddlewares[oldId];
                }
                newRoute.id = id;
                return routeConfigurator;
            },
            parent(parentId) {
                newRoute.parentRouteId = parentId;
                return routeConfigurator;
            },
            onLoad(func) {
                newRoute.actions.load = func;
                return routeConfigurator;
            },
            onUnload(func) {
                newRoute.actions.unload = func;
                return routeConfigurator;
            },
            middleware(...middlewares) {
                $this.useRouteMiddleware(newRoute.id, ...middlewares);
                return routeConfigurator;
            },
            paramPattern(paramOrPatterns: string|Record<string, string>, regexPattern?: string) {
                if(typeof paramOrPatterns === 'string') {
                    paramPatternsStorage[0][paramOrPatterns] = regexPattern!;
                }else {
                    Object.entries(paramOrPatterns).forEach(([param, regexPattern]) => {
                        paramPatternsStorage[0][param] = regexPattern;
                    })
                }
                return routeConfigurator;
            },
            hasPageData(value:boolean) {
                newRoute.hasPageData = value;
                return routeConfigurator
            }
        };

        // Add the new route to the list of routes.
        this.routeList.push(newRoute);

        return routeConfigurator;
    }

    /**
     * Removes a route by its ID from the list of routes.
     *
     * @param id - The ID of the route to be removed.
     * @returns The removed route if found, false otherwise.
     */
    public removeRoute(id: Route['id']): Route | false {
        const routeIndex = this.routeList.findIndex(route => route.id === id);
        if (routeIndex >= 0) {
            return this.routeList.splice(routeIndex, 1)[0];
        }
        return false;
    }



    // ===================================
    // Route Loading and Unloading
    // ===================================



    /**
     * Loads a route based on the current window location or a provided path.
     * 
     * @param metadata - Optional route metadata.
     * @param navigationType - The type of state action (push, traverse, or replace).
     */
    public async processCurrentRoute(metadata: LoadRequest['metadata'] = null, navigationType: NavigationType = 'push', optional?:LoadRequest['optional']) {
        // const currentURL = new URL(window.location.href);
        const routeToLoad = this.findRouteByPath();

        if (!routeToLoad) {
            ExceptionRenderer.renderException('NOT_FOUND', (window as any).PageMetaData?.body);
            (window as any).PageMetaData = null;
            this.previousState = null;
            return void 0;
        }

        await this.loadRouteData(routeToLoad, metadata, navigationType, optional);
    }

    /**
     * Loads the given route data and manages route transitions.
     * 
     * @param route - The target route to be loaded.
     * @param metadata - Optional route metadata.
     * @param navigationType - The type of state action (push, pop, or replace).
     */
    private async loadRouteData(route: Route, metadata: LoadRequest['metadata'] = null, navigationType: NavigationType = 'push', optional?:LoadRequest['optional']) {
        const routeParameters = this.extractRouteParams(route.path, window.location.pathname, route.paramPatterns);
        const hasSameRoute = this.previousState ? this.previousState.route.id === route.id : false;
        const previousStateContext = this.previousState === null ? null : this.createStateContext(this.previousState);
        const currentStateContext = this.createStateContext({
            route, 
            params: routeParameters, 
            url: new URL(window.location.href),
            navigationType,
            isSameRoute: hasSameRoute,
            optional,
            previousRequest: previousStateContext
        });

        await this.processRouteLoading(route, Object.assign(currentStateContext, {metadata}), routeParameters);

        this.previousState = {
            route: currentStateContext.route,
            params: routeParameters,
            url: currentStateContext.url,
            navigationType,
            isSameRoute: hasSameRoute,
            optional,
            previousRequest: previousStateContext
        };

        if (currentStateContext.isSameRoute || !previousStateContext) return;

        if (previousStateContext.isParentOf(currentStateContext.route['id'])) return;

        const routesToUnload = this.determineRoutesToUnload(previousStateContext, currentStateContext);

        for (const routeToUnload of routesToUnload) {
            let routeUnloadRequest:UnloadRequest = {
                ...previousStateContext,
                processingRoute: currentStateContext
            }
            await this.processRouteUnloading(routeToUnload, routeUnloadRequest);
        }
    }

    // ... (rest of the code, including helper methods like `createStateContext`, `determineRoutesToUnload`, etc.)

    /**
     * Creates a state context for a given state and its parent routes.
     * 
     * @param state - The current or previous state.
     * @param parentRoutes - Parent routes associated with the state.
     * @param isSameRoute - Indicates if the current state route matches the previous state route.
     * @returns The state context.
     */
    private createStateContext(state: RouteStateData): Omit<LoadRequest, 'metadata'> {
        const context = {
            params: state.params || this.extractRouteParams(state.route.path, window.location.pathname, state.route.paramPatterns),
            queryParams: new URLSearchParams(state.url.search),
            route: state.route,
            url: state.url,
            isParentOf: (targetRouteId: Route['id']) => {
                let targetRoute = this.findRouteById(targetRouteId);
                if(!targetRoute) return false;
                let targetRouteChildren = this.getChildRoutes(targetRoute);
                return !!targetRouteChildren.find(r => r.id === state.route.id);
            },
            isChildOf: (targetRouteId: Route['id']) => {
                let targetRoute = this.findRouteById(targetRouteId);
                if(!targetRoute) return false;
                const targetRouteParents = this.getRouteParents(targetRoute);
                return !!targetRouteParents.find(r => r.id === state.route.id);
            },
            parents: () => this.getRouteParents(state.route),
            isSameRoute: !!state.isSameRoute,
            navigationType: state.navigationType,
            sharedData: {},
            optional: state.optional,
            previousRequest: state.previousRequest
        };

        return context;
    }

    /**
     * Determines which routes need to be unloaded during a transition between states.
     * 
     * @param previousRequest - The previous state context.
     * @param currentRequest - The current state context.
     * @returns An array of routes to be unloaded.
     */
    private determineRoutesToUnload(previousRequest: Omit<LoadRequest, "metadata">, currentRequest: Omit<LoadRequest, "metadata">): Route[] {
        const allPreviousRoutes = [previousRequest.route, ...previousRequest.parents()];

        if (currentRequest.isParentOf(previousRequest.route.id)) {
            const currentIndex = allPreviousRoutes.findIndex(r => r.id === currentRequest.route.id);
            return allPreviousRoutes.slice(0, currentIndex);
        }

        return allPreviousRoutes;
    }

    /**
     * Processes the loading of the given route.
     * 
     * @param route - The route to be loaded.
     * @param context - The context of the route transition.
     * @param parameters - Route parameters.
     */
    private async processRouteLoading(route: Route, request: LoadRequest, parameters: LoadRequest['params']) {
        let middlewares = this.getMiddlewaresForRoute(route);

        // remove duplicates
        // middlewares = middlewares.filter((middleware, index, self) => self.indexOf(middleware) === index);

        const finalAction = async () => {
            const onLoadAction = await this.getRouteAction(route);

            if (typeof onLoadAction === 'function') await onLoadAction(request, parameters);
        };

        const composed = await this.composeMiddlewares(middlewares);
        await composed(request, finalAction);
    }

    /**
     * Processes the unloading of the given route.
     * 
     * @param route - The route to be unloaded.
     * @param context - The context of the route transition.
     */
    private async processRouteUnloading(route: Route, context: UnloadRequest) {
        const onUnloadAction = await this.getRouteAction(route, 'unload');
        if (typeof onUnloadAction === 'function') await onUnloadAction(context);
    }


    // ===================================
    // Route Information and Behavior Retrieval
    // ===================================

    /**
     * Retrieves all the parent routes for a given route in hierarchical order.
     * 
     * @param route - The starting route.
     * @returns An array of parent routes.
     */
    private getRouteParents(route: Route): Route[] {
        const parentRoutes: Route[] = [];
        let currentRouteParentId = route.parentRouteId;

        while (currentRouteParentId) {
            const parentRoute = this.routeList.find(r => r.id === currentRouteParentId);
            
            if (!parentRoute) break;

            parentRoutes.push(parentRoute);
            currentRouteParentId = parentRoute.parentRouteId;
        }

        return parentRoutes;
    }

    /**
     * Retrieves all child routes (descendants) for a given route.
     * 
     * This function recursively fetches all levels of child routes, including:
     * - Direct children
     * - Children of those children (grandchildren)
     * - Further descendants, no matter how deep the hierarchy goes
     * 
     * For instance, given a route structure:
     * Route A
     *   -> Route B
     *       -> Route C
     *           -> Route D
     *   -> Route E
     * 
     * Invoking `getChildRoutes` with Route A would return Routes B, C, D, and E.
     * 
     * @param route - The starting route from which to find descendant routes.
     * @returns An array containing all child routes of the given route.
     */
    private getChildRoutes(route: Route): Route[] {
        const directChildRoutes = this.routeList.filter(r => r.parentRouteId === route.id);
        const allChildRoutes: Route[] = [...directChildRoutes];
    
        // Recursively get child routes for each direct child
        for (const childRoute of directChildRoutes) {
            allChildRoutes.push(...this.getChildRoutes(childRoute));
        }
    
        return allChildRoutes;
    }

    /**
     * Extracts route parameters from a given URL path based on a template route path.
     * 
     * @param templatePath - The template route path with placeholders in `{}`.
     * @param actualPath - The actual URL path to extract parameters from (default is current window's path).
     * @returns An object containing extracted parameters.
     */
    private extractRouteParams(templatePath: string, actualPath: string = window.location.pathname, customParamPatterns:Record<string, string>): Record<string, string> {
        const extractedParams: Record<string, string> = {};
    
        templatePath = this.cleanRouteURI(templatePath);
        actualPath = this.cleanRouteURI(actualPath);
    
        const regexStr = `^${this.generateRoutePattern(templatePath, customParamPatterns)}$`;
        const regex = new RegExp(regexStr);
        const actualPathMatches = actualPath.match(regex);

        const paramNames = [...templatePath.matchAll(/{([^}?]+)\??}/g)].map(m => m[1]);

        if(actualPathMatches) {
            actualPathMatches.shift();  // Remove the full match
            paramNames.forEach((paramName, index) => {
                extractedParams[paramName] = actualPathMatches[index] || '';
            });
        }
    
        return extractedParams;
    }



    /**
     * Dynamically fetches the controller action based on the given route and action type.
     * 
     * @param route - The route from which to determine the action.
     * @param actionType - The type of action to fetch ('load' or 'unload'). Default is 'load'.
     * @returns A promise resolving to the fetched action function or null.
     */
    private async getRouteAction(route: Route, actionType: RouteActionType = 'load'): Promise<Function | null> {
        const actionDescriptor = actionType === 'load' ? route.actions.load : (route.actions.unload || route.actions.load);
        const defaultFunctionName = actionType;
    
        if (typeof actionDescriptor === 'function') return actionDescriptor;
        if (!actionDescriptor) return null;
        // if(actionDescriptor === true) actionDescriptor = route.actions.load;
    
        const [handlerFile, specificFunctionName] = actionDescriptor.split('@');
        const functionName = specificFunctionName || defaultFunctionName;
    
        const controllerDirectoryPath = appConfig.directoryPaths.controllerDirectory;
        const normalizedControllerPath = !controllerDirectoryPath || controllerDirectoryPath === '/' ? '' : (controllerDirectoryPath.endsWith('/') ? controllerDirectoryPath : `${controllerDirectoryPath}/`);

        try {
            const { default: Controller } = await import(`${normalizedControllerPath}${handlerFile}.js`);

            if (!(functionName in Controller) && actionType === 'load') {
                throw new Error(`Undefined function ${functionName} {action:${defaultFunctionName}, route: ${JSON.stringify(route)}}`);
            }
    
            const action = Controller[functionName];
            if (typeof action === 'function') {
                return action.bind(Controller);
            }
        } catch (error) {
            console.error(`Error fetching action for route: ${JSON.stringify(route)}`);
            console.error(error);
        }
    
        return null;
    }

    // ===================================
    // Route Finding Utilities
    //
    // These functions are used to locate and retrieve route details based on different criteria.
    // ===================================




    /**
     * Finds and returns the route object from the list of routes that matches the given path.
     * If no path is provided, it defaults to the current window's pathname.
     *
     * @param {string} path - The path to be matched against the routes.
     * @returns {Route | undefined} - The matching route object or undefined if no match is found.
     */
    private findRouteByPath(path: string = window.location.pathname): Route | undefined {
        const cleanedPath = this.cleanRouteURI(path);
    
        return this.routeList.find(route => {
            const routePattern = this.generateRoutePattern(route.path, route.paramPatterns);
            return new RegExp(`^${routePattern}$`).test(cleanedPath);
        });
    }

    /**
     * Retrieves a route based on its identifier.
     * 
     * @param id - The identifier of the desired route.
     * @returns The route matching the provided identifier or undefined.
     */
    private findRouteById(id: Route['id']): Route | undefined {
        return this.routeList.find(route => route.id === id);
    }






    // ===================================
    // URL and Route Utilities
    // ===================================



    /**
     * Generates a regular expression pattern for the given route template.
     * The pattern takes into account both mandatory and optional route parameters.
     * E.g., "/user/{userId}" becomes "/user/([^/]+)", and "/user/{userId?}" becomes "/user/(.*?)".
     *
     * @param template - The route template with potential parameters.
     * @returns - The regular expression pattern corresponding to the route template.
     */
    private generateRoutePattern(template: string, customParamPatterns:Record<string,string>): string {
        const cleanedTemplate = this.cleanRouteURI(template);

        return cleanedTemplate.replace(/(\/)?{([^}?]+)(\?)?}(\/)?/g, function(match, precedingSlash, paramName, optionalFlag, succeedingSlash){
            return `${optionalFlag && precedingSlash ? '\/?' : (precedingSlash || '')}(${customParamPatterns[paramName] || '[^/]+'})${optionalFlag ? '?' : ''}${optionalFlag && succeedingSlash ? '\/?' : (succeedingSlash || '')}`;
        });
    }


    /**
     * Generates a unique route identifier.
     * 
     * @returns A unique string identifier.
     */
    private generateRouteId(): string {
        return Math.random().toString(36).slice(2, 12);
    }

    /**
     * Removes leading and trailing slashes from a URI.
     * 
     * @param uri - The input URI string.
     * @returns The cleaned URI string without leading or trailing slashes.
     */
    private cleanRouteURI(uri: string): string {
        return uri.replace(/^\/+|\/+$/g, '');
    }


    /**
     * Compares two URLs to determine if they're identical.
     * 
     * @param url1 - First URL to compare.
     * @param url2 - Second URL to compare.
     * @param matchOnlyPathname - If true, only pathnames are compared. Defaults to false.
     * @returns true if the URLs are the same, false otherwise.
     */
    private doURLsMatch(url1: URL, url2: URL, matchOnlyPathname: boolean = false): boolean {
        if (url1.pathname !== url2.pathname) return false;
        if (matchOnlyPathname) return true;

        const url1Params = Object.fromEntries(new URLSearchParams(url1.search).entries());
        const url2Params = Object.fromEntries(new URLSearchParams(url2.search).entries());

        const url1ParamsKeys = Object.keys(url1Params);
        const url2ParamsKeys = Object.keys(url2Params);

        if (url1ParamsKeys.length !== url2ParamsKeys.length) return false;

        return url1ParamsKeys.every((key, index) => {
            return key === url2ParamsKeys[index] && url1Params[key] === url2Params[key];
        });
    }

    // ===================================
    // Middleware Management & Execution
    // ===================================

    /**
     * useGlobalMiddleware:
     * This method facilitates the registration of one or more global middleware functions 
     * to the router system. Once registered, these middleware functions will be invoked
     * during every route transition throughout the application.
     * 
     * Global middlewares are typically employed for universal tasks or checks 
     * that need consistent application across different routes, such as:
     * - Authenticating users
     * - Logging route access
     * - Setting up general UI states or configurations
     * 
     * @param {...middlewares} middlewares - A spread of middleware functions to be added.
     *                                     Each middleware should accept a context object and a 'next' function as arguments.
     */
    public useGlobalMiddleware(...middlewares: Middleware[]): void {
        this.globalMiddlewares.push(...middlewares);
    }


    /**
     * useRouteMiddleware:
     * This method allows for the assignment of specific middleware functions to individual routes 
     * based on the route's identifier. Middleware functions registered using this method will only 
     * be triggered during the transition to their associated routes.
     * 
     * Route-specific middlewares can be beneficial for scenarios like:
     * - Applying certain checks or operations only when accessing certain sections of an application
     * - Fetching data prerequisites specific to a page or view
     * - Adjusting the UI or state in a manner that's unique to a particular route
     * 
     * @param {string} routeId - The unique identifier of the target route to which the middlewares should be attached.
     * @param {...middlewares} middlewares - A spread of middleware functions to be associated with the specified route.
     *                                       Each middleware should accept a context object and a 'next' function as arguments.
     */
    public useRouteMiddleware(routeId: Route['id'], ...middlewares: Middleware[]): void {
        if (!this.routeMiddlewares[routeId]) {
            this.routeMiddlewares[routeId] = [];
        }
        this.routeMiddlewares[routeId].push(...middlewares);
    }

    /**
     * Wraps route additions within a middleware. Any routes added within the callback 
     * will have the provided middlewares associated with them.
     *
     * @param middlewares - The middlewares to associate with routes added within the callback.
     * @param group - The function to execute, typically containing route additions.
     */
    public middleware(middlewares:Middleware|Middleware[], group:()=>void) {
        this.activeMiddlewareStack.push(middlewares);
        group();
        this.activeMiddlewareStack.pop();
    }


    /**
     * getMiddlewaresForRoute:
     * This method retrieves all middleware functions associated with a specific route, 
     * combining both global middlewares and any route-specific middlewares.
     * 
     * The resulting list of middlewares reflects the order in which they will be executed:
     * - First, all global middlewares are executed in the order they were added.
     * - Next, any route-specific middlewares are executed, again in the order they were added.
     * 
     * This layered approach allows for:
     * - General operations or checks to be applied universally via global middlewares.
     * - Finer, route-specific adjustments or operations via route-specific middlewares.
     * 
     * @param {Route} route - The route for which the associated middlewares are to be fetched.
     * @returns {Middleware[]} - An array of middleware functions, representing the combined set 
     *                           of global and route-specific middlewares for the given route.
     */
    private getMiddlewaresForRoute(route: Route): Middleware[] {
        const globalMiddlewares = this.globalMiddlewares.filter((middleware) => {
            if(route.hasPageData === false || (route.hasPageData === null && !this.defaultFetchPageData)) return middleware !== PageMetaDataMiddleware;
            return true;
        })

        return [...globalMiddlewares, ...(this.routeMiddlewares[route.id] || [])];
    }

    /**
     * Composes an array of middleware functions into a single middleware function.
     * Each middleware function can either directly be a function or a string representing a path to the function.
     * This function ensures that middlewares are executed in order, and each middleware can pass control to the next one.
     *
     * @param {Middleware[]} middlewares - An array of middleware functions or paths to middleware functions.
     * @returns {Promise<MiddlewareFunction>} - A single composed middleware function.
     */
    private async composeMiddlewares(middlewares: Middleware[]): Promise<MiddlewareFunction> {
        // Resolve each middleware into its corresponding function.
        const resolvedMiddlewares = await Promise.all(middlewares.map(this.resolveMiddleware));
    
        // Returned function takes in a context and a finalNext function.
        // This function orchestrates the execution of the middlewares.
        return function(request: LoadRequest, finalNext: () => Promise<void>): Promise<void> {
            let currentMiddlewareIndex = -1;
    
            function executeMiddleware(middlewareIndex: number): Promise<void> {
                if (middlewareIndex <= currentMiddlewareIndex) return Promise.reject(new Error('next() called multiple times'));
                currentMiddlewareIndex = middlewareIndex;
    
                let currentMiddleware = resolvedMiddlewares[middlewareIndex];
    
                if (middlewareIndex === resolvedMiddlewares.length) currentMiddleware = finalNext;
                if (!currentMiddleware) return Promise.resolve();
    
                try {
                    return Promise.resolve(currentMiddleware(request, executeMiddleware.bind(null, middlewareIndex + 1)));
                } catch (error) {
                    return Promise.reject(error);
                }
            }

            // Initial invocation of the middleware execution process.
            return executeMiddleware(0);
        }
    }

    /**
     * Resolves a middleware into its corresponding function.
     * If the middleware is already a function, it returns it.
     * If the middleware is a string (a path), it dynamically imports the function from the path.
     *
     * @param {Middleware} middleware - Middleware function or a string path to the middleware function.
     * @returns {Promise<Function>} - The resolved middleware function.
     * @throws Will throw an error if the middleware cannot be resolved into a function.
     */
    private async resolveMiddleware(middleware: Middleware): Promise<Function> {
        if (typeof middleware === 'function') {
            return middleware;
        }

        // Attempt to dynamically resolve the middleware function from a string path.
        try {
            const { middlewareDirectory } = appConfig.directoryPaths;
            const normalizedMiddlewarePath = !middlewareDirectory || middlewareDirectory === '/' ? '' : (middlewareDirectory.endsWith('/') ? middlewareDirectory : `${middlewareDirectory}/`);
            const { default: MiddlewareFunction } = await import(`${normalizedMiddlewarePath}${middleware}.js`);
    
            if (typeof MiddlewareFunction !== 'function') {
                throw new Error(`Imported middleware from ${middleware} is not a function.`);
            }
    
            return MiddlewareFunction;
        } catch (error) {
            console.error(`Error fetching middleware from ${middleware}`, error);
            throw error;
        }
    }
}

function Link(anchorOrUrl: HTMLAnchorElement|string, metadata: any = null, optional?: any): HTMLAnchorElement {
    const anchorElement = typeof anchorOrUrl === 'string' ? document.createElement('a') : anchorOrUrl;
    if(typeof anchorOrUrl === 'string') {
        anchorElement.href = anchorOrUrl;
    }
    
    if(appConfig.isSinglePageApplication) {
        anchorElement.addEventListener('click', handleAnchorClick);
    }

    /**
     * Handles the click event for the anchor element.
     * Prevents default navigation for non-Ctrl clicks and 
     * uses the custom router mechanism instead.
     * 
     * @param {MouseEvent} event - The click event object.
     */
    function handleAnchorClick(event: MouseEvent): void {
        // If Ctrl key or Meta key is pressed, allow the default browser behavior.
        if (event.ctrlKey || event.metaKey) return;
        event.preventDefault();

        // Use the custom router for navigation.
        Router.navigate(anchorElement.href, metadata, optional);
    }

    return anchorElement;
}

export {
    Link,
    Router as default
};