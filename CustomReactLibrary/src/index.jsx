function customRender(reactEl, container) {
  const domElement = document.createElement(reactEl.type);
  domElement.innerHTML = reactEl.children;
  for (const prop in reactEl.props) {
    domElement.setAttribute(prop, reactEl.props[prop]);
  }
  container.appendChild(domElement);
}

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
