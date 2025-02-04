declare interface RouteConfigurator {
    id(id: Route['id']):this;
    parent(parentId: NonNullable<Route['parentRouteId']>) : this;
    onLoad(func: Route['actions']['load']) : this;
    onUnload(func: Exclude<Route['actions']['unload'], undefined>) : this;
    middleware(...middleware:Middleware[]) : this;

    // Using function overloads for paramPattern
    paramPattern(paramOrPatterns: string, regexPattern: string): this;
    paramPattern(paramOrPatterns: Record<string, string>): this;

    hasPageData(value: boolean): this;
}