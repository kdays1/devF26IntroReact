import React from "react";
import './Menu.css'
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";


function Menu() {
    return (<Navbar expand="lg" className="flexContainer">
        <NavLink className="menuOption" to="/">Home</NavLink>
        <NavLink className="menuOption" to="/celulares">Celulares</NavLink>
    </Navbar>)
}

export default Menu