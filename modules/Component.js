import type_check from './type-check.js';

export default class Component {
  constructor(props, propTypes) {
    if (type_check(props, { type: 'undefined' })) {
      return;
    }
    if (type_check(propTypes, { type: 'undefined' })) {
      throw new Error('propTypes must be defined');
    }
    console.log('props:', props);
    console.log('types:', propTypes);
    if (!type_check(propTypes, { type: 'object' })) {
      throw new Error('propTypes must be an object');
    }

    console.log(
      'good types ?:',
      type_check(props, { type: 'object', properties: { propTypes } })
    );
    // if (!type_check(props, propTypes)) {
    //   throw new Error('invalid props');
    // }

    this.props = props;
    if (typeof this.render !== 'function') {
      throw new Error('Component must have a render method');
    }
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
