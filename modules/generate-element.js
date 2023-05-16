// { tag: 'div', ?props: { class: 'center-div' }, children: ["TEST", { tag: 'p', children: ["YOYO"] }] }
export default function generateElement(element) {
  if (typeof element === 'string') {
    return document.createTextNode(element);
  }

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
