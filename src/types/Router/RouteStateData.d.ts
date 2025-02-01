declare interface RouteStateData {
    route: LoadRequest['route'],
    params: LoadRequest['params'], 
    url: LoadRequest['url'],
    navigationType: LoadRequest['navigationType'],
    isSameRoute: LoadRequest['isSameRoute'];
    optional: LoadRequest['optional'];
    previousRequest: LoadRequest['previousRequest'];
}