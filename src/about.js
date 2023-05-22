import { Link } from '../modules/router.js';

const about = {
  tag: 'main',
  props: {
    class: 'about',
  },
  children: [
    {
      tag: 'h1',
      children: ['About us'],
    },
    { tag: 'h2', children: ['Other pages :'] },
    {
      tag: 'ul',
      children: [
        {
          tag: 'li',
          children: [Link('Home', '/home'), Link('Contact', '/contact')],
        },
      ],
    },
  ],
};

export default about;
