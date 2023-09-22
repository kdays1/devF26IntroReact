import React, {useEffect, useState} from "react";
import Card from "../card/Card";
import ProductosStored from './productos.json'

export default function Productos() {

    useEffect(() => {
        fetch('https://api-pelis-back.onrender.com/celulares')
        .then(response => response.json())
        .then(data => {
            setProductos(data.celulares)
            setLoading(false)
        })
    }, [])

    const [productos, setProductos] = useState([])
    const [isLoading, setLoading] = useState(true)

    if(isLoading) {
        return (<h1>...Cargando...</h1>)
    } else {
        return (
        <section className='celulares'>
            {              
                productos.map((item, index) => {
                return <Card item={item} key={index}/>
                })
            }
        </section>)
    }
} 