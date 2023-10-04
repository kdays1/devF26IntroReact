import React from "react";
import './Menu.css'
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";


function Menu() {
    return (<Navbar expand="lg" className="bg-body-tertiary">
        <NavLink to="/">Celulares</NavLink>
        <a className="menuOption">All Cellphones</a>
        <a className="menuOption">iPhones</a>
        <a className="menuOption">Samsung</a>
    </Navbar>)
}

export default Menu