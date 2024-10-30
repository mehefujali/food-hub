import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Home/Home';
import Error from './Error/Error';

const router = createBrowserRouter([
  {
    errorElement: <Error></Error>
  },
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/home",
        loader: () => fetch('www.themealdb.com/api/json/v1/1/search.php?f=a'),
        element: <Home></Home>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
