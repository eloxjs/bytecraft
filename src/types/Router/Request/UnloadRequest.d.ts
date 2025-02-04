type UnloadRequest = {
    params: Record<string, string>;
    queryParams: URLSearchParams;
    route: Route;
    url: URL;
    isParentOf: (targetRouteId: Route['id']) => boolean;
    isChildOf: (targetRouteId: Route['id']) => boolean;
    parents: () => Route[];
    isSameRoute: boolean;
    navigationType: NavigationType;
    processingRoute: Omit<LoadRequest, 'pagedata'>
};
