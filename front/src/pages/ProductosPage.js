import React from "react";

const ProductosPage = (props) => {
    return (
        <div class="productos-hogar">
            <div class="producto">
              <img src="img/productos/berlin.png" alt="berlin"/>
              <h2>Silla Berlin</h2>
            </div>
            <div class="producto">
              <img src="img/productos/capri.jpg" alt="capri"/>
              <h2>Silla Capri</h2>
            </div>
            <div class="producto">
              <img src="img/productos/carmin.jpg" alt="carmin"/>
              <h2>Silla Carmin</h2>
            </div>
            <div class="producto">
              <img src="img/productos/laos.png" alt="laos"/>
              <h2>Silla Laos</h2>
            </div>
            <div class="producto">
                <img src="img/productos/lisboa.png" alt="lisboa"/>
                <h2>Silla Lisboa</h2>
            </div>
            <div class="producto">
                <img src="img/productos/martina.png" alt="martina"/>
                <h2>Silla Martina</h2>
            </div>
          </div>
    );
}

export default ProductosPage;