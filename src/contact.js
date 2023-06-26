import { Link } from '../modules/router.js';

const contact = {
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
    { tag: 'h2', children: ['Other pages :'] },
    {
      tag: 'ul',
      children: [
        {
          tag: 'li',
          children: [Link('Home', '/home')],
        },
        {
          tag: 'li',
          children: [Link('About', '/about')],
        },
      ],
    },
  ],
};

export default contact;
