import ExceptionRenderer from "../services/exception-renderer";
import Router from "../services/router";

export default async function ExceptionHandlerMiddleware(request:LoadRequest, next:MiddlewareNext) {
    let exit = false;

    /**
     * If the request doesn't have metadata and the route expects metadata,
     * make a GET request to fetch and set the metadata.
     */
    if(!request.metadata && request.route.hasPageData) {
        await fetch(request.url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        }).then((response) => {
            return response.json();
        }).then(jsonData => {
            request.metadata = jsonData;
        }).catch(() => {
            ExceptionRenderer.renderException('EXPECTATION_FAILED');
            exit = true;
        });
    }

    /**
     * If the metadata indicates a redirect, initiate the redirection
     * using the Router service.
     */
    if(request.metadata?.redirect) {
        return Router.redirect(request.metadata.redirect, {...request.metadata, redirect: null});
    }

    if(!exit) await next();
}
