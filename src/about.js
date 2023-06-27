import { Link } from '../modules/router.js';
import Component from '../modules/Component.js';

export default class About extends Component {
  constructor(props) {
    super(props);
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
