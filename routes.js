import home from './src/home.js';
import contact from './src/contact.js';
import page404 from './src/page404.js';

export default {
  '/home': home,
  '/contact': contact,
  '*': page404,
};
