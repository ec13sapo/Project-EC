import React from "react";

import { NavLink } from "react-router-dom"


const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><NavLink to="/" className={({isActive}) => isActive ? "activo" : undefined}>HOME</NavLink></li>
                    <li><NavLink to="productos" className={({isActive}) => isActive ? "activo" : undefined}>PRODUCTOS</NavLink></li>
                    <li><NavLink to="contacto" className={({isActive}) => isActive ? "activo" : undefined}>CONTACTO</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;