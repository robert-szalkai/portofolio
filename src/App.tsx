import { useState } from 'react';
import './App.css';
import Home from '@/Components/Home';

import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
