import ExceptionRenderer from "../services/exception-renderer";

export default async function PageMetaDataMiddleware(request:LoadRequest, next:MiddlewareNext) {
    /**
     * If the request metadata indicates an error, render the exception
     * using the ExceptionRenderer.
     */
    if(request.metadata && !request.metadata.ok) {
        return ExceptionRenderer.renderException(request.metadata.status, request.metadata.body);
    }

    await next();
}