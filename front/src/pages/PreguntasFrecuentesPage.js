import React from "react";
import { useState, useEffect } from 'react';

import Pregunta from "../components/Pregunta.js";

const PreguntasFrecuentesPage = (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response)=> response.json())
            .then((data)=>setData(data));
    }, []);
    return (
        <div class="preguntas">
            <Pregunta pregunta={"¿Realizan envios a todo el pais?"} respuesta={"Si."}/>
            {data?.map((user)=>(
                <li key={user.id}>{user.name}</li>
            ))};
        </div>
    );
}

export default PreguntasFrecuentesPage;