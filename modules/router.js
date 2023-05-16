import generatePage from './generate-page';

export default function Router(routes, rootElement) {
  const router = {
    routes: routes,
    rootElement: rootElement,
    getPathname: () => window.location.pathname,
  };
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
