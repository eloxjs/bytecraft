# Template Engine

## Overview
The `TemplateEngine` class in ByteCraft is responsible for processing template strings and objects by resolving placeholders with dynamic data. It supports custom delimiters, evaluates JavaScript expressions within templates, and allows reactive data binding within objects.

## Features
- **String Interpolation**: Replace placeholders within strings with actual data values.
- **Custom Delimiters**: Define your own delimiters for template placeholders.
- **Expression Evaluation**: Supports inline JavaScript expressions.
- **Object Resolution**: Resolves templates inside objects, making them reactive.

## Usage
### Basic String Interpolation
```ts
import TemplateEngine from "bytecraft/template-engine";
import {Router, path} from "bytecraft"

const data = {
    variables: { name: "ByteCraft", year: 2025 },
    "@": {
        hasRoute: Router.hasRoute,
        route: Router.route,
        path
    }
};
const template = new TemplateEngine(data);

console.log(template.resolve("Welcome to {{ name }} in {{ year }}!"));
// Output: "Welcome to ByteCraft in 2025!"

console.log(template.resolve("{{ @hasRoute('login') ? @route('login') : null }}"));
// Output: "http://localhost:3000/login" or `null`
```

### Using Expressions in Templates
```ts
const data = {
    variables: { num1: 10, num2: 20 }
};
const template = new TemplateEngine(data);

console.log(template.resolve("The sum is {{ num1 + num2 }}"));
// Output: "The sum is 30"
```

### Custom Delimiters
```ts
const data = {
    variables: { user: "Admin" }
};
const template = new TemplateEngine(data, ['[[', ']]']);

console.log(template.resolve("Hello [[ user ]]!"));
// Output: "Hello Admin!"
```

### Resolving Objects
```ts
const data = {
    variables: {
        count: 5
    }
};

const objectToBeResolved = {
    name: "Sparrow",
    message: "Current count: {{ count }} and {{ this.name }}"
}

const template = new TemplateEngine(data);
const resolvedObject = template.resolve(objectToBeResolved);

console.log(resolvedObject.message); // "Current count: 5 and Sparrow"
```
