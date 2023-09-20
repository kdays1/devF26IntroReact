import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './components/card/Card.jsx'
import Menu from './components/menu/Menu.jsx'
import App from './App.jsx'
import './index.css'

const celulares= [
  {
    title : "iPhone 15",
    price : "$25,5000"
  },
  {
    title : "Xioami",
    price : "$5,000"
  },
  {
    title : "Samsung Galaxy S22", 
    price : "$15,000"
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu/>
    <section className='celulares'>
      {
        celulares.map((item, index) => {
          return <Card item={item} key={index}/>
        })
      }
    </section>
  </React.StrictMode>,
)
