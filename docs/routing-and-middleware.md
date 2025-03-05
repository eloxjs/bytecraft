# Routing & Middleware in ByteCraft

## Routing

### Basic Routing
```js
import { Router } from "bytecraft";

Router.add(
    "/login", // URI
    () => { // Called on load
        console.log('Login page loaded.')
    },
    () => { // Called on unload
        console.log('Login page unloaded.')
    }
);
```

### How It Works
When `Router.processCurrentRoute` is called (either manually or via `window.push/pop`), the router:
- Loads the matching route for the current URL.
- Unloads the previous route by calling the specified functions.

If a route has a `parent`, and the previous route is the parent, then it won't be unloaded. Similarly, if the previous route is a `child`, the current route will not be loaded and will simply unload the previous route.

#### Configuring Routes
```js
Router.add('/login', 'login-controller')
    .id('route-id')
    .parent('parent-id')
    .onLoad(Function | 'controller-file-name@function')
    .onUnload(Function | 'controller-file-name@function')
    .middleware(...Middleware[])
    .paramPattern('key', 'pattern');
```

### Dynamically Loaded Controller Files
```js
import App, { Router } from "bytecraft";

// Set controllers directory path
App.config.directoryPaths.controllerDirectory = '/app/controllers';

Router.add("/login", "login-controller");
Router.add("/login", "login-controller@showPopup", "login-controller@hidePopup");
```

#### `/app/controllers/login-controller.js`
```js
export default new class Login {
    load(request, params) {
        console.log('Login page loaded.')
    }
    unload(request) {
        console.log('Login page unloaded.')
    }
}
```

##### `request`
```json
{
    "params": {},
    "queryParams": {},
    "route": {
        "id": "login",
        "path": "/login",
        "paramPatterns": {},
        "actions": {
            "load": "login-controller"
        },
        "parentRouteId": null,
        "hasPageData": null
    },
    "url": "http://localhost:3000/login",
    "isSameRoute": false,
    "navigationType": "push",
    "sharedData": {},
    "previousRequest": {"..."},
    "pagedata": null
}
```

### Route Parameters
#### Required Parameters
```js
Router.add("/task/{id}", (request, { id }) => {
    console.log(`Load task => ${id}`);
});
```
#### Optional Parameters
```js
Router.add("/user/{name?}", (request, { name }) => {
    console.log(`Load user => ${name}`);
});
```

#### Setting Parameter Patterns
```js
Router.add("/task/{id}", (request, { id }) => {})
    .paramPattern('id', '[0-9]');
```

### Managing Routes
#### Assign ID to Route
```js
Router.add('/signup/client', 'client-signup-controller').id('client-signup');
```
#### Remove a Route
```js
Router.remove('client-signup');
```
#### Get Route URL by ID
```js
Router.route('client-signup');
```

**Note:** If `route-id` is not found, `Router.route` throws an error. Use `Router.hasRoute` to check before calling `Router.route`.

## Route Prefixes

### Prefix with Callback
```js
Router.prefix('admin', () => {
    Router.add('/users', () => {
        // Matches "/admin/users"
    });
});
```

### Global Prefix (Without Callback)
```js
Router.prefix('admin');
Router.add('/users', () => {}); // Matches "/admin/users"
```

#### Removing the Last Prefix
```js
Router.endPrefix();
```

#### Prefix with Parameter Pattern
```js
Router.prefix('admin/{user_id}').paramPattern('[0-9a-z]');
```

## Middleware

### Basic Usage
```js
Router.add('/dashboard', async (request, next) => {
    if (request.pagedata.authenticated) return await next();
    Router.redirect('/login');
});
```

### Global Middleware
```js
Router.useGlobalMiddleware(async (request, next) => {
    request.sharedData = { /* ... */ };
    next();
});
```

### Route Middleware
```js
Router.useRouteMiddleware('route-id', ...Middleware[]);
```

### Route Group with Middleware
```js
Router.middleware([middlewares], () => {
    Router.add('tasks', 'tasks-middleware');
});
```

### Middleware Files
```js
import App, { Router } from "bytecraft";

// Set middleware directory path
App.config.directoryPaths.middlewareDirectory = '/app/middlewares';

Router.add('/dashboard', 'dashboard-controller').middleware('auth-middleware');
```

#### `/app/middlewares/auth-middleware.js`
```js
export default async function AuthMiddleware(request, next) {
    if (request.pagedata.authenticated) return await next();
    Router.redirect('/login');
}
```

### Fetch Page Data Middleware
If enabled, ByteCraft will fetch page data via a POST request to `request.url` and append it to `request.pagedata`. The response must be in JSON format.
```js
Router.defaultFetchPageData = true;
```
#### Disable/Enable Page Data Middleware for a Specific Route
```js
Router.add('/login').hasPageData(false);
```

