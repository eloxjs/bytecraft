/**
 * Represents the structure of a route within the application.
 * 
 * Each route has:
 * - `id`: A unique identifier for the route.
 * - `path`: The URL path associated with the route.
 * - `actions`: Functions or identifiers to be triggered on specific route transitions.
 *   - `onEnter`: Executed when entering the route. Can be a function or an identifier string.
 *   - `onExit`: (Optional) Executed when exiting the route. Can be a function or an identifier string.
 * - `parentRouteId`: The ID of the parent route, if any. If the route doesn't have a parent, it's set to `null`.
 */
declare interface Route {
    id: string;
    path: string;
    paramPatterns: Record<string, string>;
    actions: {
        load: string | Function;
        unload?: string | Function | null;
    };
    parentRouteId: null | Route['id'];
    hasPageData: boolean | null;
}
