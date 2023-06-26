export default class Component {
  constructor(props) {
    // Il manque la vérifiaction des props avec type_check_v3
    this.props = props;
  }

  shouldUpdate(newProps) {
    for (const prop in newProps) {
      if (
        newProps.hasOwnProperty(prop) &&
        (!this.props.hasOwnProperty(prop) ||
          this.props[prop] !== newProps[prop])
      ) {
        return true;
      }
    }
    return false;
  }

  render() {
    return null;
  }

  display(parentNode) {
    const shouldUpdate = this.shouldUpdate();
    if (shouldUpdate) {
      const element = this.render();
      parentNode.appendChild(element);
    }
  }
}