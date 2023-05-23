import Home from '@/Components/Home';

import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
