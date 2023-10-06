import React, {useEffect, useState} from "react";
import Card from "../card/Card";
import { Link } from "react-router-dom";

export default function Productos() {
    const [productos, setProductos] = useState()
    const [isLoading, setLoading] = useState(true)
    const [searchState, setSearchState] = useState('')
    const [productosFilterState, setProductosFilterState] = useState()

    useEffect(() => {
        fetch('https://api-pelis-back.onrender.com/celulares')
        .then(response => response.json())
        .then(data => {
            setProductos(data)
            setProductosFilterState(data.celulares)
            setLoading(false)
        })
    }, [])

    const handlerSearch = (event) => {
        setSearchState(event.target.value)
        if (!event.target.value) {
            setProductosFilterState(productos.celulares)
        } else {
            let productoFilter = productos.celulares.filter(item => item.title.toLowerCase().includes(searchState.toLowerCase()))
            setProductosFilterState(productoFilter)
        }
    }

    if(isLoading) {
        return (<h1>...Cargando...</h1>)
    } else {
        return (
            <>
                <div>
                    <div>
                        <input onChange={handlerSearch} type="text" placeholder="buscar producto"/>
                    </div>
                </div>
                <section className='celulares'>
                    {              
                        productosFilterState.map((item, index) => {
                        return (
                            <Link to={`/celulares/${item.title}`} state={item} key={index}>
                                <Card item={item}/>
                            </Link>
                        )
                        })
                    }
                </section>
            </>
        )
    }
} 