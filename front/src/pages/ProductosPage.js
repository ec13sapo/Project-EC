import React from "react";
import Producto from "../components/MiniaturaProducto.js";

const ProductosPage = (props) => {
    return (
        <div class="productos-hogar">
          <Producto nombre={'Silla Berlin'} imagen={"img/productos/berlin.png"}/>
          <Producto nombre={'Silla Capri'} imagen={"img/productos/capri.jpg"}/>
          <Producto nombre={'Silla Carmin'} imagen={"img/productos/carmin.jpg"}/>
          <Producto nombre={'Silla Laos'} imagen={"img/productos/laos.png"}/>
          <Producto nombre={'Silla Lisboa'} imagen={"img/productos/lisboa.png"}/>
          <Producto nombre={'Silla Martina'} imagen={"img/productos/martina.png"}/>
        </div>
    );
}

export default ProductosPage;