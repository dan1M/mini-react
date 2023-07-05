import { Link } from '../modules/router.js';
import Component from '../modules/Component.js';

export default class Page404 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return {
      tag: 'main',
      props: {
        className: 'page404',
      },
      children: [
        {
          tag: 'h1',
          children: ['404'],
        },
        {
          tag: 'p',
          children: ['Page not found'],
        },
        Link('Go to home page', '/home')
      ],
    };
  }
}
