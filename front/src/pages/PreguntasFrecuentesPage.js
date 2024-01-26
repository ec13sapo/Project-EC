import React, {useState,useEffect} from "react";
import axios from 'axios';
import Pregunta from "../components/Pregunta.js";
import './../styles/components/pages/PreguntasFrecuentesPage.css'

const PreguntasFrecuentesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [preguntas, setPreguntas] = useState([]);

    useEffect(() =>{
        const cargarPreguntas = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/preguntas');
            setPreguntas(response.data);
            setLoading(false);
        };

        cargarPreguntas();
    }, []);
    
    return (
        <section>
            <h2>Preguntas Frecuentes</h2>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                preguntas.map(item => <Pregunta key={item.id}
                    pregunta={item.pregunta} body={item.respuesta}/>)
            )}
        </section>
    )
}

export default PreguntasFrecuentesPage;