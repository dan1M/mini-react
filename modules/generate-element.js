import Component from './Component.js';
import interpolate from './interpolate.js';

export default function generateElement(element) {

  if (typeof element === 'string') {
    return document.createTextNode(element);
  }

  // checking if element is a Component, if so we instanciate it and call render
  else if (element.tag?.prototype && element.tag?.prototype instanceof Component) {
    const component = new element.tag(element.props);
    return generateElement(component.render());
  }

  // else, we create a dom element
  const el = document.createElement(element.tag);
  if (element.props) {
    Object.keys(element.props).forEach((prop) => {
      el[prop] = element.props[prop];
    });
  }

  if (element.children) {
    element.children.forEach((child) => {
      el.appendChild(generateElement(child));
    });
  }

  return el;
}
