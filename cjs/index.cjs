'use strict';

class EventManager {
    constructor() {
        this.events = {};
    }
    addEventListener(eventType, listener) {
        if (!this.events[eventType]) {
            this.events[eventType] = [];
        }
        if (!this.events[eventType].includes(listener)) {
            this.events[eventType].push(listener);
        }
    }
    removeEventListener(eventType, listener) {
        if (!this.events[eventType])
            return void 0;
        const listenerIndex = this.events[eventType].indexOf(listener);
        if (listenerIndex >= 0) {
            this.events[eventType].splice(listenerIndex, 1);
        }
    }
    dispatchEvent(eventType, ...params) {
        const eventListeners = this.events[eventType] || [];
        eventListeners.forEach(listener => listener(...params));
    }
}

const httpStatusCodes = {
    "CONTINUE": {
        "code": 100,
        "text": "Continue"
    },
    "SWITCHING_PROTOCOLS": {
        "code": 101,
        "text": "Switching Protocols"
    },
    "PROCESSING": {
        "code": 102,
        "text": "Processing"
    },
    "OK": {
        "code": 200,
        "text": "OK"
    },
    "CREATED": {
        "code": 201,
        "text": "Created"
    },
    "ACCEPTED": {
        "code": 202,
        "text": "Accepted"
    },
    "NON_AUTHORITATIVE_INFORMATION": {
        "code": 203,
        "text": "Non Authoritative Information"
    },
    "NO_CONTENT": {
        "code": 204,
        "text": "No Content"
    },
    "RESET_CONTENT": {
        "code": 205,
        "text": "Reset Content"
    },
    "PARTIAL_CONTENT": {
        "code": 206,
        "text": "Partial Content"
    },
    "MULTI_STATUS": {
        "code": 207,
        "text": "Multi-Status"
    },
    "MULTIPLE_CHOICES": {
        "code": 300,
        "text": "Multiple Choices"
    },
    "MOVED_PERMANENTLY": {
        "code": 301,
        "text": "Moved Permanently"
    },
    "MOVED_TEMPORARILY": {
        "code": 302,
        "text": "Moved Temporarily"
    },
    "SEE_OTHER": {
        "code": 303,
        "text": "See Other"
    },
    "NOT_MODIFIED": {
        "code": 304,
        "text": "Not Modified"
    },
    "USE_PROXY": {
        "code": 305,
        "text": "Use Proxy"
    },
    "TEMPORARY_REDIRECT": {
        "code": 307,
        "text": "Temporary Redirect"
    },
    "PERMANENT_REDIRECT": {
        "code": 308,
        "text": "Permanent Redirect"
    },
    "BAD_REQUEST": {
        "code": 400,
        "text": "Bad Request"
    },
    "UNAUTHORIZED": {
        "code": 401,
        "text": "Unauthorized"
    },
    "PAYMENT_REQUIRED": {
        "code": 402,
        "text": "Payment Required"
    },
    "FORBIDDEN": {
        "code": 403,
        "text": "Forbidden"
    },
    "NOT_FOUND": {
        "code": 404,
        "text": "Not Found"
    },
    "METHOD_NOT_ALLOWED": {
        "code": 405,
        "text": "Method Not Allowed"
    },
    "NOT_ACCEPTABLE": {
        "code": 406,
        "text": "Not Acceptable"
    },
    "PROXY_AUTHENTICATION_REQUIRED": {
        "code": 407,
        "text": "Proxy Authentication Required"
    },
    "REQUEST_TIMEOUT": {
        "code": 408,
        "text": "Request Timeout"
    },
    "CONFLICT": {
        "code": 409,
        "text": "Conflict"
    },
    "GONE": {
        "code": 410,
        "text": "Gone"
    },
    "LENGTH_REQUIRED": {
        "code": 411,
        "text": "Length Required"
    },
    "PRECONDITION_FAILED": {
        "code": 412,
        "text": "Precondition Failed"
    },
    "REQUEST_TOO_LONG": {
        "code": 413,
        "text": "Request Entity Too Large"
    },
    "REQUEST_URI_TOO_LONG": {
        "code": 414,
        "text": "Request-URI Too Long"
    },
    "UNSUPPORTED_MEDIA_TYPE": {
        "code": 415,
        "text": "Unsupported Media Type"
    },
    "REQUESTED_RANGE_NOT_SATISFIABLE": {
        "code": 416,
        "text": "Requested Range Not Satisfiable"
    },
    "EXPECTATION_FAILED": {
        "code": 417,
        "text": "Expectation Failed"
    },
    "IM_A_TEAPOT": {
        "code": 418,
        "text": "I'm a teapot"
    },
    "INSUFFICIENT_SPACE_ON_RESOURCE": {
        "code": 419,
        "text": "Insufficient Space on Resource"
    },
    "METHOD_FAILURE": {
        "code": 420,
        "text": "Method Failure"
    },
    "MISDIRECTED_REQUEST": {
        "code": 421,
        "text": "Misdirected Request"
    },
    "UNPROCESSABLE_ENTITY": {
        "code": 422,
        "text": "Unprocessable Entity"
    },
    "LOCKED": {
        "code": 423,
        "text": "Locked"
    },
    "FAILED_DEPENDENCY": {
        "code": 424,
        "text": "Failed Dependency"
    },
    "PRECONDITION_REQUIRED": {
        "code": 428,
        "text": "Precondition Required"
    },
    "TOO_MANY_REQUESTS": {
        "code": 429,
        "text": "Too Many Requests"
    },
    "REQUEST_HEADER_FIELDS_TOO_LARGE": {
        "code": 431,
        "text": "Request Header Fields Too Large"
    },
    "UNAVAILABLE_FOR_LEGAL_REASONS": {
        "code": 451,
        "text": "Unavailable For Legal Reasons"
    },
    "INTERNAL_SERVER_ERROR": {
        "code": 500,
        "text": "Internal Server Error"
    },
    "NOT_IMPLEMENTED": {
        "code": 501,
        "text": "Not Implemented"
    },
    "BAD_GATEWAY": {
        "code": 502,
        "text": "Bad Gateway"
    },
    "SERVICE_UNAVAILABLE": {
        "code": 503,
        "text": "Service Unavailable"
    },
    "GATEWAY_TIMEOUT": {
        "code": 504,
        "text": "Gateway Timeout"
    },
    "HTTP_VERSION_NOT_SUPPORTED": {
        "code": 505,
        "text": "HTTP Version Not Supported"
    },
    "INSUFFICIENT_STORAGE": {
        "code": 507,
        "text": "Insufficient Storage"
    },
    "NETWORK_AUTHENTICATION_REQUIRED": {
        "code": 511,
        "text": "Network Authentication Required"
    }
};
class HttpStatusCodeUtils {
    static getCodeByConstant(constant) {
        var _a;
        return ((_a = httpStatusCodes[constant]) === null || _a === void 0 ? void 0 : _a.code) || null;
    }
    static getConstantByCode(code) {
        return Object.keys(httpStatusCodes).find(constant => httpStatusCodes[constant].code === code) || null;
    }
    static getText(codeOrConstant) {
        var _a;
        if (typeof codeOrConstant === "string") {
            return ((_a = httpStatusCodes[codeOrConstant]) === null || _a === void 0 ? void 0 : _a.text) || null;
        }
        const constant = HttpStatusCodeUtils.getConstantByCode(codeOrConstant);
        return constant ? httpStatusCodes[constant].text : null;
    }
}

var __awaiter$3 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class ExceptionRenderer {
    static renderException(status_1) {
        return __awaiter$3(this, arguments, void 0, function* (status, data = null) {
            const httpStatusConstant = ExceptionRenderer.getStatusConstant(status);
            const httpStatus = httpStatusCodes[httpStatusConstant];
            const customView = ExceptionRenderer.customViewMappings[httpStatusConstant];
            App.title = httpStatus.text;
            document.title = httpStatus.text;
            if (customView) {
                yield this.renderCustomView(customView, { status: Object.assign({}, httpStatus), data });
            }
            else {
                this.renderDefaultView({ status: Object.assign({}, httpStatus), data });
            }
        });
    }
    static setCustomView(status, customFileName) {
        const httpStatusConstant = ExceptionRenderer.getStatusConstant(status);
        this.customViewMappings[httpStatusConstant] = {
            viewFileName: customFileName || status.toString()
        };
    }
    static setCustomFallbackView(fileName) {
        ExceptionRenderer.customFallbackView = fileName;
    }
    static getStatusConstant(status) {
        if (typeof status === 'string')
            return status;
        return HttpStatusCodeUtils.getConstantByCode(status);
    }
    static renderCustomView(customView, data) {
        return __awaiter$3(this, void 0, void 0, function* () {
            const errorViewDirectoryPath = App.config.directoryPaths.errorViewDirectory;
            const normalizedErrorViewPath = (!errorViewDirectoryPath || errorViewDirectoryPath === '/')
                ? ''
                : (errorViewDirectoryPath.endsWith('/') ? errorViewDirectoryPath : `${errorViewDirectoryPath}/`);
            try {
                const { default: ErrorView } = yield import(`${normalizedErrorViewPath}${customView.viewFileName}.js`);
                ErrorView.bind(ErrorView)(data);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    static renderDefaultView(exceptionData) {
        if (ExceptionRenderer.customFallbackView !== null) {
            this.renderCustomView({ viewFileName: ExceptionRenderer.customFallbackView }, exceptionData);
        }
        else {
            document.body.innerHTML = `${exceptionData.status.code} | ${exceptionData.status.text}`;
        }
    }
}
ExceptionRenderer.customViewMappings = {};
ExceptionRenderer.customFallbackView = null;

var appConfig = new class AppConfig {
    constructor() {
        this.isSinglePageApplication = true;
        this.name = '';
        this.title = {
            prefix: '',
            content: '',
            suffix: '',
            placeholder: '',
            omitPrefixIfAppName: true,
            omitSuffixIfAppName: true
        };
        this.environment = ['127.0.0.1', 'localhost'].includes(window.location.hostname) ? 'dev' : 'prod';
        this.themeList = ['light', 'dark'];
        this.directoryPaths = {
            controllerDirectory: '',
            middlewareDirectory: '',
            errorViewDirectory: ''
        };
        this.paths = {
            assetPath: '/',
            sourcePath: '/src'
        };
    }
};

var __awaiter$2 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function ExceptionHandlerMiddleware(request, next) {
    return __awaiter$2(this, void 0, void 0, function* () {
        if (request.pagedata && !request.pagedata.ok) {
            return ExceptionRenderer.renderException(request.pagedata.status, request.pagedata.body);
        }
        yield next();
    });
}

var __awaiter$1 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function PageDataMiddleware(request, next) {
    return __awaiter$1(this, void 0, void 0, function* () {
        var _a;
        let exit = false;
        if (!request.pagedata && request.route.hasPageData) {
            yield fetch(request.url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            }).then((response) => {
                return response.json();
            }).then(jsonData => {
                request.pagedata = jsonData;
            }).catch(() => {
                ExceptionRenderer.renderException('EXPECTATION_FAILED');
                exit = true;
            });
        }
        if ((_a = request.pagedata) === null || _a === void 0 ? void 0 : _a.redirect) {
            return Router.redirect(request.pagedata.redirect, Object.assign(Object.assign({}, request.pagedata), { redirect: null }));
        }
        if (!exit)
            yield next();
    });
}

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Router = new class Router {
    constructor() {
        this.uriPrefix = [];
        this.routeList = [];
        this.previousState = null;
        this.activeMiddlewareStack = [];
        this.globalMiddlewares = [];
        this.routeMiddlewares = {};
        this.defaultFetchPageData = false;
        window.addEventListener('popstate', this.handleBrowserNavigation.bind(this));
        this.useGlobalMiddleware(PageDataMiddleware, ExceptionHandlerMiddleware);
    }
    handleBrowserNavigation() {
        const currentPath = window.location.pathname;
        const currentURL = new URL(currentPath, window.location.href);
        if (this.previousState && this.doURLsMatch(this.previousState.url, currentURL))
            return;
        this.processCurrentRoute(null, 'traverse');
    }
    navigate(destination, pagedata = null, optional) {
        if (appConfig.isSinglePageApplication) {
            const uniqueState = this.generateRouteId() + new Date().getTime().toString();
            window.history.pushState(uniqueState, document.title, destination);
        }
        else {
            window.location.href = destination;
            return;
        }
        this.processCurrentRoute(pagedata, 'push', optional);
    }
    redirect(destination, pagedata = null, optional) {
        let targetRoute = this.findRouteByPath(destination);
        let routeId = targetRoute ? targetRoute.id : this.generateRouteId();
        if (appConfig.isSinglePageApplication) {
            window.history.replaceState(routeId, document.title, destination);
        }
        else {
            window.location.replace(destination);
        }
        this.processCurrentRoute(pagedata, 'replace', optional);
    }
    hasRoute(id) {
        return Boolean(this.findRouteById(id));
    }
    route(routeId, routeParams) {
        return this.getRouteURLOrFail(routeId, routeParams);
    }
    getRouteURLOrFail(routeId, routeParams) {
        let url = this.getRouteURL(routeId, routeParams);
        if (url === null)
            throw new Error(`Undefined route id (${routeId})`);
        return url;
    }
    getRouteURL(routeId, routeParams) {
        const route = this.findRouteById(routeId);
        if (!route)
            return null;
        const { path: routePath } = route;
        const routeParamMap = this.mapValuesToURITemplate(routePath, routeParams);
        const populatedURI = this.populateURITemplate(routePath, routeParamMap);
        return new URL(populatedURI, window.location.href).href;
    }
    mapValuesToURITemplate(routePath, routeParams) {
        const placeholders = Array.from(routePath.matchAll(/{([^}?]+)\??}/g)).map(match => match[1]);
        if (!routeParams || !routeParams.length)
            return {};
        if (!Array.isArray(routeParams)) {
            return routeParams;
        }
        const matchedParams = {};
        routeParams.forEach((value, index) => {
            if (placeholders[index]) {
                matchedParams[placeholders[index]] = value;
            }
        });
        return matchedParams;
    }
    populateURITemplate(routePath, routeParams, customPatterns = {}) {
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
    prefix(routePrefix, callback) {
        let newPrefix = {
            prefix: routePrefix,
            paramPatterns: {}
        };
        this.uriPrefix.push(newPrefix);
        if (callback) {
            callback();
            this.endPrefix();
        }
        const prefixConfiurator = {
            paramPattern(paramOrPatterns, regexPattern) {
                if (typeof paramOrPatterns === 'string') {
                    newPrefix.paramPatterns[paramOrPatterns] = regexPattern;
                }
                else {
                    Object.entries(paramOrPatterns).forEach(([param, regexPattern]) => {
                        newPrefix.paramPatterns[param] = regexPattern;
                    });
                }
                return prefixConfiurator;
            }
        };
        return prefixConfiurator;
    }
    endPrefix() {
        this.uriPrefix.pop();
    }
    add(uriSegment, load, unload) {
        const fullUri = [...this.uriPrefix.map(i => i.prefix), uriSegment]
            .map(segment => this.cleanRouteURI(segment))
            .filter(Boolean)
            .join('/');
        const formattedUri = fullUri.startsWith('/') ? fullUri : '/' + fullUri;
        const paramPatternsStorage = [{}, ...this.uriPrefix.map(i => i.paramPatterns)];
        const newRoute = {
            id: this.generateRouteId(),
            path: formattedUri,
            get paramPatterns() {
                return Object.assign({}, ...paramPatternsStorage);
            },
            set paramPatterns(paramPatterns) {
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
        newRoute.paramPatterns;
        this.useRouteMiddleware(newRoute.id, ...this.activeMiddlewareStack.flat(1));
        const $this = this;
        const routeConfigurator = {
            id(id) {
                let oldId = newRoute.id;
                if (oldId in $this.routeMiddlewares) {
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
            paramPattern(paramOrPatterns, regexPattern) {
                if (typeof paramOrPatterns === 'string') {
                    paramPatternsStorage[0][paramOrPatterns] = regexPattern;
                }
                else {
                    Object.entries(paramOrPatterns).forEach(([param, regexPattern]) => {
                        paramPatternsStorage[0][param] = regexPattern;
                    });
                }
                return routeConfigurator;
            },
            hasPageData(value) {
                newRoute.hasPageData = value;
                return routeConfigurator;
            }
        };
        this.routeList.push(newRoute);
        return routeConfigurator;
    }
    remove(id) {
        const routeIndex = this.routeList.findIndex(route => route.id === id);
        if (routeIndex >= 0) {
            return this.routeList.splice(routeIndex, 1)[0];
        }
        return false;
    }
    processCurrentRoute() {
        return __awaiter(this, arguments, void 0, function* (pagedata = null, navigationType = 'push', optional) {
            var _a;
            const routeToLoad = this.findRouteByPath();
            if (!routeToLoad) {
                ExceptionRenderer.renderException('NOT_FOUND', (_a = window.$PageData) === null || _a === void 0 ? void 0 : _a.body);
                window.$PageData = null;
                this.previousState = null;
                return void 0;
            }
            yield this.loadRouteData(routeToLoad, pagedata, navigationType, optional);
        });
    }
    loadRouteData(route_1) {
        return __awaiter(this, arguments, void 0, function* (route, pagedata = null, navigationType = 'push', optional) {
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
            if (!(previousStateContext === null || previousStateContext === void 0 ? void 0 : previousStateContext.isChildOf(route.id))) {
                yield this.processRouteLoading(route, Object.assign(currentStateContext, { pagedata }), routeParameters);
            }
            this.previousState = {
                route: currentStateContext.route,
                params: routeParameters,
                url: currentStateContext.url,
                navigationType,
                isSameRoute: hasSameRoute,
                optional,
                previousRequest: previousStateContext
            };
            if (currentStateContext.isSameRoute || !previousStateContext)
                return;
            if (previousStateContext.isParentOf(currentStateContext.route['id']))
                return;
            const routesToUnload = this.determineRoutesToUnload(previousStateContext, currentStateContext);
            for (const routeToUnload of routesToUnload) {
                let routeUnloadRequest = Object.assign(Object.assign({}, previousStateContext), { processingRoute: currentStateContext });
                yield this.processRouteUnloading(routeToUnload, routeUnloadRequest);
            }
        });
    }
    createStateContext(state) {
        const context = {
            params: state.params || this.extractRouteParams(state.route.path, window.location.pathname, state.route.paramPatterns),
            queryParams: new URLSearchParams(state.url.search),
            route: state.route,
            url: state.url,
            isParentOf: (targetRouteId) => {
                const targetRoute = this.findRouteById(targetRouteId);
                if (!targetRoute)
                    return false;
                const targetRouteChildren = this.getChildRoutes(state.route);
                return !!targetRouteChildren.find(r => r.id === targetRoute.id);
            },
            isChildOf: (targetRouteId) => {
                let targetRoute = this.findRouteById(targetRouteId);
                if (!targetRoute)
                    return false;
                const targetRouteParents = this.getRouteParents(state.route);
                return !!targetRouteParents.find(r => r.id === targetRoute.id);
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
    determineRoutesToUnload(previousRequest, currentRequest) {
        const allPreviousRoutes = [previousRequest.route, ...previousRequest.parents()];
        if (currentRequest.isParentOf(previousRequest.route.id)) {
            const currentIndex = allPreviousRoutes.findIndex(r => r.id === currentRequest.route.id);
            return allPreviousRoutes.slice(0, currentIndex);
        }
        return allPreviousRoutes;
    }
    processRouteLoading(route, request, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            let middlewares = this.getMiddlewaresForRoute(route);
            const finalAction = () => __awaiter(this, void 0, void 0, function* () {
                const onLoadAction = yield this.getRouteAction(route);
                if (typeof onLoadAction === 'function')
                    yield onLoadAction(request, parameters);
            });
            const composed = yield this.composeMiddlewares(middlewares);
            yield composed(request, finalAction);
        });
    }
    processRouteUnloading(route, context) {
        return __awaiter(this, void 0, void 0, function* () {
            const onUnloadAction = yield this.getRouteAction(route, 'unload');
            if (typeof onUnloadAction === 'function')
                yield onUnloadAction(context);
        });
    }
    getRouteParents(route) {
        const parentRoutes = [];
        let currentRouteParentId = route.parentRouteId;
        while (currentRouteParentId) {
            const parentRoute = this.routeList.find(r => r.id === currentRouteParentId);
            if (!parentRoute)
                break;
            parentRoutes.push(parentRoute);
            currentRouteParentId = parentRoute.parentRouteId;
        }
        return parentRoutes;
    }
    getChildRoutes(route) {
        const directChildRoutes = this.routeList.filter(r => r.parentRouteId === route.id);
        const allChildRoutes = [...directChildRoutes];
        for (const childRoute of directChildRoutes) {
            allChildRoutes.push(...this.getChildRoutes(childRoute));
        }
        return allChildRoutes;
    }
    extractRouteParams(templatePath, actualPath = window.location.pathname, customParamPatterns) {
        const extractedParams = {};
        templatePath = this.cleanRouteURI(templatePath);
        actualPath = this.cleanRouteURI(actualPath);
        const regexStr = `^${this.generateRoutePattern(templatePath, customParamPatterns)}$`;
        const regex = new RegExp(regexStr);
        const actualPathMatches = actualPath.match(regex);
        const paramNames = [...templatePath.matchAll(/{([^}?]+)\??}/g)].map(m => m[1]);
        if (actualPathMatches) {
            actualPathMatches.shift();
            paramNames.forEach((paramName, index) => {
                extractedParams[paramName] = actualPathMatches[index] || '';
            });
        }
        return extractedParams;
    }
    getRouteAction(route_1) {
        return __awaiter(this, arguments, void 0, function* (route, actionType = 'load') {
            const actionDescriptor = actionType === 'load' ? route.actions.load : (route.actions.unload || route.actions.load);
            const defaultFunctionName = actionType;
            if (actionType === 'unload' && typeof actionDescriptor === 'function' && !route.actions.unload)
                return null;
            if (typeof actionDescriptor === 'function')
                return actionDescriptor;
            if (!actionDescriptor)
                return null;
            const [handlerFile, specificFunctionName] = actionDescriptor.split('@');
            const functionName = specificFunctionName || defaultFunctionName;
            const controllerDirectoryPath = appConfig.directoryPaths.controllerDirectory;
            const normalizedControllerPath = !controllerDirectoryPath || controllerDirectoryPath === '/' ? '' : (controllerDirectoryPath.endsWith('/') ? controllerDirectoryPath : `${controllerDirectoryPath}/`);
            try {
                const { default: Controller } = yield import(`${normalizedControllerPath}${handlerFile}.js`);
                if (!(functionName in Controller) && actionType === 'load') {
                    throw new Error(`Undefined function ${functionName} {action:${defaultFunctionName}, route: ${JSON.stringify(route)}}`);
                }
                const action = Controller[functionName];
                if (typeof action === 'function') {
                    return action.bind(Controller);
                }
            }
            catch (error) {
                console.error(`Error fetching action for route: ${JSON.stringify(route)}`);
                console.error(error);
            }
            return null;
        });
    }
    findRouteByPath(path = window.location.pathname) {
        const cleanedPath = this.cleanRouteURI(path);
        return this.routeList.find(route => {
            const routePattern = this.generateRoutePattern(route.path, route.paramPatterns);
            return new RegExp(`^${routePattern}$`).test(cleanedPath);
        });
    }
    findRouteById(id) {
        return this.routeList.find(route => route.id === id);
    }
    generateRoutePattern(template, customParamPatterns) {
        const cleanedTemplate = this.cleanRouteURI(template);
        return cleanedTemplate.replace(/(\/)?{([^}?]+)(\?)?}(\/)?/g, function (match, precedingSlash, paramName, optionalFlag, succeedingSlash) {
            return `${optionalFlag && precedingSlash ? '\/?' : (precedingSlash || '')}(${customParamPatterns[paramName] || '[^/]+'})${optionalFlag ? '?' : ''}${optionalFlag && succeedingSlash ? '\/?' : (succeedingSlash || '')}`;
        });
    }
    generateRouteId() {
        return Math.random().toString(36).slice(2, 12);
    }
    cleanRouteURI(uri) {
        return uri.replace(/^\/+|\/+$/g, '');
    }
    doURLsMatch(url1, url2, matchOnlyPathname = false) {
        if (url1.pathname !== url2.pathname)
            return false;
        if (matchOnlyPathname)
            return true;
        const url1Params = Object.fromEntries(new URLSearchParams(url1.search).entries());
        const url2Params = Object.fromEntries(new URLSearchParams(url2.search).entries());
        const url1ParamsKeys = Object.keys(url1Params);
        const url2ParamsKeys = Object.keys(url2Params);
        if (url1ParamsKeys.length !== url2ParamsKeys.length)
            return false;
        return url1ParamsKeys.every((key, index) => {
            return key === url2ParamsKeys[index] && url1Params[key] === url2Params[key];
        });
    }
    useGlobalMiddleware(...middlewares) {
        this.globalMiddlewares.push(...middlewares);
    }
    useRouteMiddleware(routeId, ...middlewares) {
        if (!this.routeMiddlewares[routeId]) {
            this.routeMiddlewares[routeId] = [];
        }
        this.routeMiddlewares[routeId].push(...middlewares);
    }
    middleware(middlewares, group) {
        this.activeMiddlewareStack.push(middlewares);
        group();
        this.activeMiddlewareStack.pop();
    }
    getMiddlewaresForRoute(route) {
        const globalMiddlewares = this.globalMiddlewares.filter((middleware) => {
            if (route.hasPageData === false || (route.hasPageData === null && !this.defaultFetchPageData))
                return middleware !== PageDataMiddleware;
            return true;
        });
        return [...globalMiddlewares, ...(this.routeMiddlewares[route.id] || [])];
    }
    composeMiddlewares(middlewares) {
        return __awaiter(this, void 0, void 0, function* () {
            const resolvedMiddlewares = yield Promise.all(middlewares.map(this.resolveMiddleware));
            return function (request, finalNext) {
                let currentMiddlewareIndex = -1;
                function executeMiddleware(middlewareIndex) {
                    if (middlewareIndex <= currentMiddlewareIndex)
                        return Promise.reject(new Error('next() called multiple times'));
                    currentMiddlewareIndex = middlewareIndex;
                    let currentMiddleware = resolvedMiddlewares[middlewareIndex];
                    if (middlewareIndex === resolvedMiddlewares.length)
                        currentMiddleware = finalNext;
                    if (!currentMiddleware)
                        return Promise.resolve();
                    try {
                        return Promise.resolve(currentMiddleware(request, executeMiddleware.bind(null, middlewareIndex + 1)));
                    }
                    catch (error) {
                        return Promise.reject(error);
                    }
                }
                return executeMiddleware(0);
            };
        });
    }
    resolveMiddleware(middleware) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof middleware === 'function') {
                return middleware;
            }
            try {
                const { middlewareDirectory } = appConfig.directoryPaths;
                const normalizedMiddlewarePath = !middlewareDirectory || middlewareDirectory === '/' ? '' : (middlewareDirectory.endsWith('/') ? middlewareDirectory : `${middlewareDirectory}/`);
                const { default: MiddlewareFunction } = yield import(`${normalizedMiddlewarePath}${middleware}.js`);
                if (typeof MiddlewareFunction !== 'function') {
                    throw new Error(`Imported middleware from ${middleware} is not a function.`);
                }
                return MiddlewareFunction;
            }
            catch (error) {
                console.error(`Error fetching middleware from ${middleware}`, error);
                throw error;
            }
        });
    }
};
function Link(anchorOrUrl, pagedata = null, optional) {
    const anchorElement = typeof anchorOrUrl === 'string' ? document.createElement('a') : anchorOrUrl;
    if (typeof anchorOrUrl === 'string') {
        anchorElement.href = anchorOrUrl;
    }
    if (appConfig.isSinglePageApplication) {
        anchorElement.addEventListener('click', handleAnchorClick);
    }
    function handleAnchorClick(event) {
        if (event.ctrlKey || event.metaKey)
            return;
        event.preventDefault();
        Router.navigate(anchorElement.href, pagedata, optional);
    }
    return anchorElement;
}

class StateNavigator extends EventManager {
    constructor() {
        super();
        this.navigableStates = [];
        this.lastState = null;
        this.lastState = window.history.state;
        window.addEventListener('popstate', this.handleStateChange.bind(this));
    }
    handleStateChange(event) {
        const currentState = event.state;
        if (this.lastState) {
            this.deactivateState(this.lastState);
        }
        if (currentState) {
            this.activateState(currentState);
        }
        this.lastState = currentState;
        this.dispatchEvent('statechange');
    }
    navigateToState(state, onExitCallback, onEnterCallback) {
        const navigationState = {
            state,
            uri: window.location.href,
            action: {
                onEnter: onEnterCallback,
                onExit: onExitCallback
            },
            parent: null,
            isActive: false
        };
        const navigableStateConfigurator = {
            onEnter: function (onEnterCallback) {
                navigationState.action.onEnter = onEnterCallback || undefined;
                return navigableStateConfigurator;
            },
            onExit: function (onExitCallback) {
                navigationState.action.onExit = onExitCallback;
                return navigableStateConfigurator;
            },
            parent: function (parentState) {
                navigationState.parent = parentState;
                return navigableStateConfigurator;
            }
        };
        this.navigableStates.push(navigationState);
        window.history.pushState(state, document.title, navigationState.uri);
        this.lastState = history.state;
        this.activateState(state);
        return navigableStateConfigurator;
    }
    activateState(state) {
        const navigationState = this.navigableStates.find(route => route.state === state);
        if (!navigationState)
            return false;
        if (navigationState.isActive)
            return;
        const onEnterCallback = navigationState.action.onEnter;
        navigationState.isActive = true;
        if (onEnterCallback)
            onEnterCallback();
    }
    deactivateState(state) {
        const navigationState = this.navigableStates.find(route => route.state === state);
        if (!navigationState)
            return false;
        const onExitCallback = navigationState.action.onExit;
        navigationState.isActive = false;
        onExitCallback();
        if (!navigationState.action.onEnter) {
            this.removeState(state);
        }
    }
    removeState(state) {
        const stateIndex = this.navigableStates.findIndex(route => route.state === state);
        if (stateIndex >= 0) {
            this.navigableStates.splice(stateIndex, 1);
        }
    }
}
var stateNavigator = new StateNavigator();

function sanitizeSegment(segment) {
    if (!segment)
        return '';
    return segment.replace(/^\/+|\/+$/g, '');
}
function basePath(path, folderPath) {
    const sanitizedFolder = sanitizeSegment(folderPath);
    const sanitizedPath = sanitizeSegment(path);
    const combinedPath = [sanitizedFolder, sanitizedPath].filter(Boolean).join('/');
    return new URL(`/${combinedPath}`, window.location.href).href;
}
function srcPath(path) {
    return basePath(path, appConfig.paths.sourcePath);
}
function asset(path, folder) {
    return basePath(path, `${sanitizeSegment(appConfig.paths.assetPath)}/${sanitizeSegment(folder)}`);
}
function jsPath(path) {
    return asset(path, 'js');
}
function cssPath(path) {
    return asset(path, 'css');
}
function faviconPath(path) {
    return asset(path, 'favicon');
}
function fontPath(path) {
    return asset(path, 'font');
}
function imagePath(path) {
    return asset(path, 'image');
}
function musicPath(path) {
    return asset(path, 'music');
}
function videoPath(path) {
    return asset(path, 'video');
}
function tempPath(path) {
    return asset(path, 'temp');
}

var path = /*#__PURE__*/Object.freeze({
    __proto__: null,
    asset: asset,
    basePath: basePath,
    cssPath: cssPath,
    faviconPath: faviconPath,
    fontPath: fontPath,
    imagePath: imagePath,
    jsPath: jsPath,
    musicPath: musicPath,
    srcPath: srcPath,
    tempPath: tempPath,
    videoPath: videoPath
});

let activeTheme = appConfig.themeList[0];
let themeSetInLocalStorage = window.localStorage.getItem('theme');
const App = new class App extends EventManager {
    constructor() {
        var _a, _b;
        super();
        this.config = appConfig;
        this.csrfToken = ((_b = (_a = document.querySelector('meta[name="csrf-token"]')) === null || _a === void 0 ? void 0 : _a.getAttribute) === null || _b === void 0 ? void 0 : _b.call(_a, 'content')) || '';
        this.theme = themeSetInLocalStorage;
        window.addEventListener('storage', (event) => {
            if (event.key !== 'theme')
                return void 0;
            this.theme = event.newValue;
        });
    }
    get name() { return this.config.name; }
    set name(value) { this.config.name = value; }
    get title() { return this.config.title.content; }
    set title(title) {
        const titleConfig = typeof title === 'string' ? this.config.title : Object.assign(this.config.title, title);
        if (typeof title === 'string')
            this.config.title.content = title;
        const { prefix, content, suffix } = titleConfig;
        let documentTitle = `${prefix}${content}${suffix}`;
        if (title === this.name) {
            documentTitle = `${titleConfig.omitPrefixIfAppName ? '' : prefix}${content}${titleConfig.omitSuffixIfAppName ? '' : suffix}`;
        }
        else if (!title) {
            documentTitle = titleConfig.placeholder;
        }
        document.title = documentTitle;
        this.dispatchEvent('changetitle');
    }
    get theme() { return activeTheme; }
    set theme(theme) {
        if (activeTheme !== theme && this.config.themeList.includes(theme)) {
            const oldTheme = activeTheme;
            activeTheme = theme;
            window.localStorage.setItem('theme', activeTheme);
            this.dispatchEvent('changetheme', { currentTheme: theme, oldTheme });
        }
    }
};

exports.EventManager = EventManager;
exports.ExceptionRenderer = ExceptionRenderer;
exports.Link = Link;
exports.Router = Router;
exports.StateNavigator = stateNavigator;
exports.default = App;
exports.path = path;
