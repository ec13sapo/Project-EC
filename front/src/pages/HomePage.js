import React from "react";

import Producto from "../components/MiniaturaProducto.js";

const HomePage = (props) => {
    return (
        <div class="HomePage">
            <div class="banners">
                <img src="img/home/banner-1.png" alt="banner-1" class="banners"/>
            </div>
            <div class="productos-destacados">
                <Producto nombre={'Silla Berlin'} imagen={"img/productos/berlin.png"}/>
                <Producto nombre={'Silla Capri'} imagen={"img/productos/capri.jpg"}/>
                <Producto nombre={'Silla Carmin'} imagen={"img/productos/carmin.jpg"}/>
                <Producto nombre={'Silla Laos'} imagen={"img/productos/laos.png"}/>
                <Producto nombre={'Silla Lisboa'} imagen={"img/productos/lisboa.png"}/>
                <Producto nombre={'Silla Martina'} imagen={"img/productos/martina.png"}/>
            </div>
        </div>
    );
}

export default HomePage;