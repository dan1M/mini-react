import generatePage from './generate-page.js';

export default function Router(routes, rootElement) {
  const router = {
    routes: routes,
    rootElement: rootElement,
    getPathname: () => window.location.pathname,
  };

  const oldPushState = window.history.pushState;
  window.history.pushState = function (data, title, url) {
    oldPushState.call(window.history, data, title, url);
    window.dispatchEvent(new Event('popstate'));
  };

  window.onpopstate = generatePage.bind(router);
  generatePage.call(router);
}

export function Link(title, href) {
  return {
    tag: 'a',
    props: {
      href: href,
      onClick: (event) => {
        event.preventDefault();
        window.history.pushState({}, '', href);
      },
    },
    children: [title],
  };
}
