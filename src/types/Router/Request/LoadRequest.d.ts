declare interface LoadRequest<PageDataBody = any> {
    params: Record<string, string>;
    queryParams: URLSearchParams;
    route: Route;
    url: URL;
    pagedata: PageData<PageDataBody> | null;
    isParentOf: (targetRouteId: Route['id']) => boolean;
    isChildOf: (targetRouteId: Route['id']) => boolean;
    parents: () => Route[];
    isSameRoute: boolean;
    navigationType: NavigationType;
    previousRequest: Omit<LoadRequest, 'pagedata'> | null;
    sharedData: Record<string, any>;
    optional: any
}

