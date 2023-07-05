import Component from '../modules/Component.js';

export default class About extends Component {
  constructor(props) {
    const propTypes = {
      description: {
        type: 'string',
      },
    };
    super(props, propTypes);
  }

  render() {
    return {
      tag: 'section',
      props: {
        className: 'about',
      },
      children: [
        {
          tag: 'h1',
          children: ['About us'],
        },
        {
          tag: 'p',
          children: [this.props.description],
        },
      ],
    };
  }
}
