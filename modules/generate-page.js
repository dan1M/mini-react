import generateElement from './generate-element.js';

export default function generatePage() {
  const pageFound = this.routes[this.getPathname()] ?? this.routes['*'];
  if (!pageFound) return;

  const component = new pageFound();
  const element = component.render();
  const generatedElement = generateElement(element);

  if (this.rootElement.firstChild) {
    this.rootElement.replaceChild(generatedElement, this.rootElement.firstChild);
  } else {
    this.rootElement.appendChild(generatedElement);
  }
}
