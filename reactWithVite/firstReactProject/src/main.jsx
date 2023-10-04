import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './components/card/Card.jsx'
import Menu from './components/menu/Menu.jsx'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import './index.css'
import Productos from './components/productos/productos.jsx'
import Home from './components/Home/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DetailsView from './components/DetailsView/DetailsView.jsx'
import { Outlet } from 'react-router-dom'

const routes = createBrowserRouter([
  {
    path: '/hola',
    element: <h2>hola</h2>
  },
  {
    path: '/',
    element: (
      <>
        <Home/>
        <Outlet/>
      </>
      ),
    errorElement: <h1>Lo siento no encontre la ruta</h1>,
    children: [
      {
        path: '/',
        element: <Productos/>
      },
      {
        path: '/pantallas',
        element: <h2>Pantallas </h2>
      },
      {
        path: '/celulares',
        element: <DetailsView/>
      }
    ]

  },
  {
    path: '/about',
    element: <h1>About us</h1>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
