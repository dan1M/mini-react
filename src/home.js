import { Link } from '../modules/router.js';
import Component from '../modules/Component.js';

class Home extends Component {
  render() {
    return {
      tag: 'main',
      props: {
        className: 'home',
      },
      children: [
        {
          tag: 'h1',
          children: ['Home'],
          props: {
            style: 'color: red;'
          }
        },
        {
          tag: 'p',
          children: ['Welcome to the home page!'],
        },
        { tag: 'h2', children: ['Other pages :'] },
        {
          tag: 'ul',
          children: [
            {
              tag: 'li',
              children: [Link('About', '/about')],
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

export default Home;
