import React from "react";

import Pregunta from "../components/Pregunta.js";

const PreguntasFrecuentesPage = (props) => {
    return (
        <div class="preguntas">
            <Pregunta pregunta={"¿Realizan envios a todo el pais?"} respuesta={"Si."}/>
        </div>
    );
}

export default PreguntasFrecuentesPage;