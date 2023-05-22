import Router from './modules/router.js';
import routes from './routes.js';

const root = document.getElementById('root');
Router(routes, root);
