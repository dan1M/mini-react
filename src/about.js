import { Link } from '../modules/router.js';
import Component from '../modules/Component.js';

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return {
      tag: 'main',
      props: {
        className: 'about',
      },
      children: [
        {
          tag: 'h1',
          children: ['About us'],
        },
        {
          tag: 'h2',
          children: ['Other pages :'],
        },
        {
          tag: 'ul',
          children: [
            {
              tag: 'li',
              children: [Link('Home', '/home')],
            },
            {
              tag: 'li',
              children: [Link('Contact', '/contact')],
            },
          ],
        },
      ],
    };
  }
}
