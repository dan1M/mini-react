import { Link } from '../modules/router.js';
import Component from '../modules/Component.js';

export default class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return {
      tag: 'main',
      props: {
        className: 'contact',
      },
      children: [
        {
          tag: 'h1',
          children: ['Contact Us!'],
        },
        {
          tag: 'p',
          children: ['This is the contact page.'],
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
          ],
        },
      ],
    };
  }
}
