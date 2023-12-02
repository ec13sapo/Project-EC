import React from "react";

const HomePage = (props) => {
    return (
        <div class="HomePage">
            <div class="banners">
                <img src="img/home/banner-1.png" alt="banner-1" class="banners"/>
            </div>
            <div class="productos-destacados">
                <div class="miniatura-producto">
                    <img src="img/productos/berlin.png" alt="berlin"/>
                    <h1>Silla Berlin</h1>
                </div>
                <div class="miniatura-producto">
                    <img src="img/productos/capri.jpg" alt="capri"/>
                    <h1>Silla Capri</h1>
                </div>
                <div class="miniatura-producto">
                    <img src="img/productos/carmin.jpg" alt="carmin"/>
                    <h1>Silla Carmin</h1>
                </div>
                <div class="miniatura-producto">
                    <img src="img/productos/laos.png" alt="laos"/>
                    <h1>Silla Laos</h1>
                </div>
                <div class="miniatura-producto">
                    <img src="img/productos/lisboa.png" alt="lisboa"/>
                    <h1>Silla Lisboa</h1>
                </div>
            </div>
        </div>
    );
}

export default HomePage;