import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";

//React JSX syntax
const Element = <a href="https://google.com">Clicl me to visit google</a>;

//working of React Library for rendering elements
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google"
);

createRoot(document.getElementById("root")).render(reactElement);
