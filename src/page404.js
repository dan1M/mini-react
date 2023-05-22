import { Link } from '../modules/router.js';

const page404 = {
  tag: 'main',
  props: {
    class: 'page404',
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
    Link('Go to home page', '/home'),
  ],
};

export default page404;
