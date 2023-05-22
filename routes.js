import home from './src/home.js';
import about from './src/about.js';
import contact from './src/contact.js';
import page404 from './src/page404.js';

export default {
  '/home': home,
  '/about': about,
  '/contact': contact,
  '*': page404,
};
