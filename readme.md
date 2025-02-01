# ByteCraft
**ByteCraft** is a modern JavaScript framework for building Single-Page and Multi-Page Applications with DOM. It follows the MVC architecture and provides powerful features like routing, middleware support, reactive hooks, and a built-in template engine.

## 🚀 Features
- **MVC-based architecture** - Organize your application efficiently.
- **No HTML required** - Build UI dynamically without writing HTML. No virtual DOM, directly updates the actual DOM for simplicity and performance.
- **Routing with middleware support** - Define routes and middleware easily.  
- **Theme management** - Handle multiple themes seamlessly.  
- **Reactive hooks** - Simplify state management and UI updates.  
- **Built-in template engine** - Render dynamic content with ease.

For detailed explanations, check the [documentation](docs/readme.md).

---

## 📦 Installation

Install **ByteCraft** using npm:

```sh
npm install git+https://github.com/ByteCraftJS/bytecraft.git
```

## ⚡ Quick Start
```js
import App, { Router } from "bytecraft"
import {Anchor} from "bytecraft/dom"

App.name = 'Your App Name';

App.config.directoryPaths.controllerDirectory = '/app/controllers';

Router.addRoute('/', 'dashboard-controller').id('dashboard');
Router.addRoute('/login', 'login-controller').id('login');

Router.processCurrentRoute();
```

For more details, visit the [documentation](docs/readme.md).

## 📖 Documentation
- [Routing & Middleware](docs/routing-and-middleware.md)
- [DOM Utils](docs/dom-utils.md)
- [Reactive Hooks](docs/hooks.md)
- [Template Engine](docs/template-engine.md)
- [Future Goals](docs/future-goals.md)

## 🤝 Contributing
We welcome contributions! Please check our [Contributing Guide](CONTRIBUTING.md) before submitting a pull request.

## 🛡 License
This project is licensed under the MIT License.