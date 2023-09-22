import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './components/card/Card.jsx'
import Menu from './components/menu/Menu.jsx'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import './index.css'
import Productos from './components/productos/productos.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu/>
    <Productos/>
  </React.StrictMode>,
)
