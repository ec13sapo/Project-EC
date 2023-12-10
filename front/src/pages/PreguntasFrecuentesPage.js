import React from "react";

import Pregunta from "../components/Pregunta.js";


const PreguntasFrecuentesPage = (props) => {
    return (
        <div class="preguntas">
               <Pregunta pregunta={"¿Realizan envios a todo el pais?"} respuesta={"Si."}/>
               <Pregunta pregunta={"¿Qué pasa si se rompe mi producto?"} respuesta={"Si se encuentra dentro de los 6 meses posteriores a la compra, su producto todavia se encuentra en garantia y sera reemplazado por uno nuevo."}/>
        </div>
    );
}

export default PreguntasFrecuentesPage;