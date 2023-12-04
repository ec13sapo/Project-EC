import React from "react";
import '../styles/components/layout/MiniaturaProducto.css';

const Producto = ({nombre,imagen}) => {
    return (
        <div class="miniatura">
            <img id="img-miniatura" src={imagen} alt={nombre}/>
            <h1>{nombre}</h1>
        </div>
    );
}

export default Producto;