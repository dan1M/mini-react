import generateElement from './generate-element.js';

export default function generatePage() {
  const pageFound = this.routes[this.getPathname()] ?? this.routes['*'];
  if (!pageFound) return;

  let elem = generateElement(pageFound);

  if (this.rootElement.firstChild) {
    this.rootElement.replaceChild(elem, this.rootElement.firstChild);
  } else {
    this.rootElement.appendChild(elem);
  }
}
