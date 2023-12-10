import React from "react";
import '../styles/components/layout/Pregunta.css';

const Pregunta = ({pregunta,respuesta}) => {
    return (
        <div class="pregunta">
            <h2>{pregunta}</h2>
            <div class="respuesta">
                <h3>{respuesta}</h3>
            </div>
        </div>
    );
}

export default Pregunta;