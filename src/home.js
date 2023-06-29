import { Link } from '../modules/router.js';
import Component from '../modules/Component.js';
import About from './about.js';
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return {
      tag: 'main',
      props: {
        className: 'home',
      },
      children: [
        {
          tag: 'nav',
          props: {},
          children: [Link('Contact', '/contact')],
        },
        {
          tag: 'section',
          props: {},
          children: [
            {
              tag: 'h1',
              children: ['Home'],
              props: {
                style: 'color: red;',
              },
            },
            {
              tag: 'p',
              children: ['Welcome to the home page!'],
            },
          ],
        },
        {
          tag: 'section',
          props: {},
          children: [{ tag: About, props: { description: 3 } }],
        },
      ],
    };
  }
}

export default Home;
