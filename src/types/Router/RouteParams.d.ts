/**
 * Represents the parameters passed to a route.
 * 
 * Route parameters can be:
 * - A single string, often used for routes that accept a single parameter.
 * - An object where each property key represents the parameter name and the corresponding value 
 *   is the parameter value. This format is useful for routes that can accept multiple named parameters.
 */
type RouteParams = string[] | { [key: string]: string };