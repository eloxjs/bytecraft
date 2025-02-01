declare interface LoadRequest<MetadataBody = any> {
    params: Record<string, string>;
    queryParams: URLSearchParams;
    route: Route;
    url: URL;
    metadata: Metadata<MetadataBody> | null;
    isParentOf: (targetRouteId: Route['id']) => boolean;
    isChildOf: (targetRouteId: Route['id']) => boolean;
    parents: () => Route[];
    isSameRoute: boolean;
    navigationType: NavigationType;
    previousRequest: Omit<LoadRequest, 'metadata'> | null;
    sharedData: Record<string, any>;
    optional: any
}

