import React from "react";
import './../styles/components/layout/MiniaturaProducto.css';

const Producto = (props) => {
    const {imagen, name, price} = props;
    return (
        <div className="productos">
            <img src={imagen} alt="foto"/>
            <h3>{name}</h3>
            <h4>${price}</h4>
        </div>
    );
}

export default Producto;