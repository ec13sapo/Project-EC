import React from "react";
import './../styles/components/layout/MiniaturaProducto.css';

const Producto = (props) => {
    const {imagen, description, name, price} = props;
    return (
        <div className="productos">
            <div className="foto-descripcion">
                <img src={imagen} alt="foto"/>
                <p className="descripcion">{description}</p>
            </div>
            <h3>{name}</h3>
            <h4>${price}</h4>
        </div>
    );
}

export default Producto;