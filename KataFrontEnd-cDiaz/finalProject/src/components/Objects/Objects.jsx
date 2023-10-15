import React, {useEffect, useState} from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

export default function Objects () {
    const [isLoading, setLoading] = useState(true)
    const [products, setProducts] = useState()
    const [filterProducts, setFilterProducts] = useState()

    useEffect(() => {
        fetch('https://api-pelis-back.onrender.com/independientes')
        .then(response => response.json())
        .then(data => {
            console.log('Los datos',data)
            console.log('los datos pero en pelicualas', data.peliculas)
            setProducts(data.peliculas)
            setFilterProducts(data.peliculas)
            setLoading(false)
            console.log(products)
        })
    }, [])

    const handlerSearch = (event) => {
        setSearchState(event.target.value)
        if (!event.target.value) {
            setProductosFilterState(productos)
        } else {
            let productoFilter = productos.filter(item => item.title.toLowerCase().includes(searchState.toLowerCase()))
            setProductosFilterState(productoFilter)
        }
    }

    if(isLoading) {
        return (<h1>...Cargando...</h1>)
    } else {
        return (
            <>
                {/* <div>
                        <input onChange={isSearching} type="text" placeholder="look for a product"/>
                </div> */}
                <section>
                    {              
                        filterProducts.map((item, index) => {
                        return (
                            <>
                                <Card item={item}>
                                </Card>
                            </>
                        )
                        })
                    }
                </section>
            </>
        )
    }

}