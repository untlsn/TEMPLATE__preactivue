import { createElement, lazy, Suspense } from 'react';
const pages = import.meta.glob('./pages/**/*') as Record<string, () => Promise<any>>;

const App = () => {
  const routes = useRoutes(Object.entries(pages).map(([path, component]) => ({
    path: path
      .replace(/(\.\/pages)|(\.[tj]sx?)|(\/index)|]/g, '')
      .replace(/\[/g, ':'),
    element: createElement(lazy(component)),
  })));

  return (
    <Suspense fallback={<></>}>
      {routes}
    </Suspense>
  );
};

export default App;
