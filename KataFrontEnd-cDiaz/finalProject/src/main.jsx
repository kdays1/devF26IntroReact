import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Objects from './components/Objects/Objects';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import './index.css'

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Home></Home>
        <Outlet></Outlet>
      </>
    ),
    errorElement: <h1>The route does not exists.</h1>,
    children: [
      {
        path:'/products',
        element: <Objects></Objects>
      }
      // {
      //   path:'products/:title',
      // }
    ]

}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
