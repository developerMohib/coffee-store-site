import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import AddCoffee from './Pages/AddCoffee.jsx';
import UpdateCoffee from './Pages/UpdateCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App> </App>,
    children: [
      {
        path: "/",
        element: <Home> </Home>,
        loader: () => fetch(`http://localhost:5000/coffee`)
      },
      {
        path: "/addCoffe",
        element: <AddCoffee> </AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee> </UpdateCoffee>,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
