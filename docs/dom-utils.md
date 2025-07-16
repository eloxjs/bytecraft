# Elox.js DOM Module

The `elox/dom` module provides utility functions for creating and manipulating DOM elements easily. It simplifies element creation with a declarative approach, allowing developers to build UI components programmatically.

## Features

- **Direct DOM Manipulation:** No virtual DOM, directly updates the actual DOM for simplicity and performance.
- **Element Factory Functions:** Create HTML elements like `div`, `h1-h6`, `span`, `img`, `input`, `form`, and [more using function calls](dom-utils/element-factory-functions.md).
- **Declarative Syntax:** Use tag descriptors to define elements with classes, IDs, and attributes in a concise manner.
- **DOM Manipulation:** Easily append, remove, and update elements.
- **Utility Functions:** Set attributes, styles, inner text, and HTML content.
- **Custom Properties:** Add support for fallback images, limited text lines, and more.

## Usage

### Creating Elements

```js
import { Div, H1, Span, Img } from "elox/dom";

const title = H1({ text: "Welcome to elox" });
const content = Div(".content", { text: "This is a dynamically created div." });
const image = Img({ src: "image.jpg", fallbackSrc: "fallback.jpg" });

document.body.append(title, content, image);
```

### **Ways to Create Elements**

There are multiple ways to create elements with different configurations.

#### **1. Using a Tag Name with Classes, ID & Attributes**
```js
const section = Section(".container#main[role=region][data-active]");
// <section class="container" id="main" role="region" data-active></section>
```
Creates a `<section>` element with:
- Class: `container`
- ID: `main`
- Attributes: `role="region"`, `data-active`

#### **2. Using a Configuration Object**
```js
const input = Input({ type: "text", placeholder: "Enter your name" });
```
Creates an `<input>` element with `type="text"` and a placeholder.

#### **3. Using Child Nodes**
```js
const container = Div({ class: "wrapper" }, P({ text: "Hello World" }));
```
###### Output
```html
<div class="wrapper">
    <p>Hello World</p>
</div>
```

Creates a `<div class="wrapper">` containing a `<p>` with text "Hello World".

---

### **Supported Properties in Configuration Object**
| Property       | Description                                        |
|---------------|----------------------------------------------------|
| `.`           | Sets the class name (`className`).                 |
| `#`           | Sets the element's `id`.                           |
| `[]`          | Assigns attributes to the element.                 |
| `html`        | Sets `innerHTML`.                                  |
| `text`        | Sets `innerText`.                                  |
| `style`       | Applies inline styles.                             |
| `fallbackSrc` | Provides a fallback image source on error.         |
| `numberOfLines` | Limits the number of visible text lines.        |

This approach provides a **structured, readable, and flexible** way to create DOM elements in JavaScript.

---

## API Reference

### Element Factory Functions

Each factory function creates a specific HTML element.

| Function | Description |
|----------|-------------|
| `Div()` | Creates a `<div>` element. |
| `Span()` | Creates a `<span>` element. |
| `P()` | Creates a `<p>` (paragraph) element. |
| `H1(), H2(), H3(), H4(), H5(), H6()` | Creates `<h1>` to `<h6>` heading elements. |
| `Img()` | Creates an `<img>` element. |
| `Button()` | Creates a `<button>` element. |
| `Input()` | Creates an `<input>` element. |
| `Textarea()` | Creates a `<textarea>` element. |
| `Form()` | Creates a `<form>` element. |
| `Label()` | Creates a `<label>` element. |
| `Select()` | Creates a `<select>` element. |
| `Option()` | Creates an `<option>` element. |
| `Ul(), Ol()` | Creates an unordered (`<ul>`) or ordered (`<ol>`) list. |
| `Li()` | Creates a list item (`<li>`) element. |
| `Table()` | Creates a `<table>` element. |
| `Tr()` | Creates a table row (`<tr>`). |
| `Td(), Th()` | Creates table data (`<td>`) and header (`<th>`) cells. |
| `A()` | Creates an `<a>` (anchor) element. |
| `Hr()` | Creates a `<hr>` (horizontal rule) element. |
| `Br()` | Creates a `<br>` (line break) element. |

View full list of [element factory functions](dom-utils/element-factory-functions.md)

### Helper Functions

| Function | Description |
|----------|-------------|
| `append(parent, ...children)` | Appends elements to a parent node. |
| `clearContent(target)` | Clears all content inside an element. |
| `setAttribute(element, attributes)` | Sets multiple attributes on an element. |
| `applyStyle(element, styles)` | Applies inline styles using an object. |
| `addClass(element, ...classes)` | Adds classes to an element. |
| `removeClass(element, ...classes)` | Removes classes from an element. |


### Explanation of `append` and `assembleDOM` Usage

#### **1. `append` Function**
The `append` function is a utility that allows adding multiple child elements, text nodes, or strings to a parent element in the DOM.

##### **Usage**
```ts
const container = Div();
append(container, "Hello", Span());
document.body.append(container);
```

##### **How It Works**
- It takes a `targetParent` (any valid HTML element).
- Accepts multiple child elements (Nodes, Text nodes, or strings).
- If a string is provided, it gets converted into a `TextNode` automatically.
- Uses `targetParent.append(...)` to add all child nodes to the parent.
- Returns the modified parent element.

##### **Example**
```ts
const div = Div();
const span = Span({
    text: "Inside Span"
});

append(
    div,
    append(div, "Hello, ", span) // Appends "text and <span>" to <div>
)
```

#### **2. `setAttribute` & `applyStyle` Function**

```js
import { setAttribute, applyStyle, Div } from "elox/dom";

const box = Div(".box");
setAttribute(box, { "data-type": "container" });
applyStyle(box, { width: "200px", height: "100px", backgroundColor: "blue" });

document.body.append(box);
```

#### **3. `assembleDOM` Function**
The `assembleDOM` function is designed for structured DOM building. It allows you to nest elements easily by defining hierarchical structures.

##### **Usage**
```ts
const parentDiv = assembleDOM(Div())(
    [Section(), [
        P(),
        [Span(), TextNode("Nested text")]
    ]],
    Footer()
);

document.body.append(parentDiv); // append(document.body, parentDiv)
```
###### Output
```html
<div>
    <section>
        <p></p>
        <span>Nested text</span>
    </section>
    <footer></footer>
</div>
```

##### **How It Works**
- Accepts a root element (`root`).
- Returns a function that can take multiple child elements in nested structures.
- Uses `recursivelyAppend()` to process each child.
- If a child is an array, it determines its hierarchical parent and appends it accordingly.
- Calls `append` to append elements correctly.

##### **Example**
```ts
const container = assembleDOM(Div("#container"))(
    [
        Header({id: "header"}), // child of #container
        [
            Nav(), // child of `#header`
            H1(), // child of `nav`
        ]
    ],
    [
        Section("#section"), // child of `#container`
        Article(), // child of `#section`
        Aside(), // child of `#section`
    ],
    Footer() // child of #container
);

document.body.append(container); // append(document.body, container)
```

##### **Key Features**
- Allows **deeply nested elements** to be appended properly.
- Identifies parent-child relationships in **nested arrays**.
- Ensures a **structured DOM** creation process.

## Conclusion

`elox/dom` provides an intuitive API for creating and managing DOM elements in JavaScript. It streamlines UI development and enhances code readability by offering a declarative syntax. Try it out and simplify your frontend workflow!