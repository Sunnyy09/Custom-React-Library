# Custom-React-Library

# React Element Rendering Example

### 1. Custom Rendering Function

The `customRender` function manually creates and appends elements without using React.

```javascript
function customRender(reactEl, container) {
  const domElement = document.createElement(reactEl.type);
  domElement.innerHTML = reactEl.children;
  for (const prop in reactEl.props) {
    domElement.setAttribute(prop, reactEl.props[prop]);
  }
  container.appendChild(domElement);
}
```

### 2. Rendering with `customRender`

The `customRender` function is called with an element object to render it in the DOM.

````javascript
const reactEl = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactEl, mainContainer);

This example demonstrates two methods for rendering an anchor element that links to Google:
1. Using React's built-in `createElement` and `render` functions.
2. Using a custom rendering function to simulate React’s behavior.

## Prerequisites
- Node.js installed
- React and ReactDOM libraries

## Code Explanation

### 3. Using JSX Syntax
An anchor element is created using JSX:
```javascript
const Element = <a href="https://google.com">Click me to visit google</a>;
````

### 4. Using `React.createElement`

The `React.createElement` method manually creates a React element:

```javascript
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google"
);
```

This `reactElement` is rendered into the DOM with `createRoot` and `render`:

```javascript
createRoot(document.getElementById("root")).render(reactElement);
```

```

## Summary
This example provides a basic understanding of how React elements can be rendered with both built-in React methods and a custom function, showing how React might work under the hood.

## Run the Example
1. Clone the repository.
2. Run `npm install`.
3. Open `index.html` to see the anchor element rendered by React and the custom function.

```
