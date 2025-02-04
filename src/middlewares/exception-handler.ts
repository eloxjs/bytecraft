import ExceptionRenderer from "../services/exception-renderer";

export default async function ExceptionHandlerMiddleware(request:LoadRequest, next:MiddlewareNext) {
    /**
     * If the request pagedata indicates an error, render the exception
     * using the ExceptionRenderer.
     */
    if(request.pagedata && !request.pagedata.ok) {
        return ExceptionRenderer.renderException(request.pagedata.status, request.pagedata.body);
    }

    await next();
}
