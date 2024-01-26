import React from "react";
import '../styles/components/layout/Pregunta.css';

const Pregunta = (props) => {
    const {pregunta, body} = props;
    return (
        <div className="preguntas">
            <h3>{pregunta}</h3>
            <div dangerouslySetInnerHTML={{__html:body}}/>
            <hr />
        </div>
    );
}

export default Pregunta;