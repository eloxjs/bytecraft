import ExceptionRenderer from "../router/exception-renderer";
import Router from "../router/router";

export default async function PageDataMiddleware(request:LoadRequest, next:MiddlewareNext) {
    let exit = false;

    /**
     * If the request doesn't have pagedata and the route expects pagedata,
     * make a GET request to fetch and set the pagedata.
     */
    if(!request.pagedata && request.route.hasPageData) {
        await fetch(request.url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        }).then((response) => {
            return response.json();
        }).then(jsonData => {
            request.pagedata = jsonData;
        }).catch(() => {
            ExceptionRenderer.renderException('EXPECTATION_FAILED');
            exit = true;
        });
    }

    /**
     * If the pagedata indicates a redirect, initiate the redirection
     * using the Router service.
     */
    if(request.pagedata?.redirect) {
        return Router.redirect(request.pagedata.redirect, {...request.pagedata, redirect: null});
    }

    if(!exit) await next();
}