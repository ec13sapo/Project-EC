import React, {useState} from "react";
import axios from 'axios';
import './../styles/components/pages/ContactosPage.css'

const ContactosPage = (props) => {
    const initialForm={
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg,setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]:value 
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
        axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if(response.data.error === false){
            setFormData(initialForm)
        }
    }

    return (
        <div class="contacto">
            <form className="formulario" action="/contacto" method="post" onSubmit={handleSubmit}>
                <div className="contenedor">
                    <section>
                        <div>
                            <label for="nombre">NOMBRE</label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                        </div>
                        <div>
                            <label for="email">MAIL</label>
                            <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                        </div>
                        <div>
                            <label for="telefono">TELEFONO</label>
                            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                        </div>
                        <div>
                            <label for="mensaje">DETALLE DE LA CONSULTA</label>
                            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                        </div>
                    </section>
                    <section id="datos">
                        <h3>Otros metodos de contacto</h3>
                        <li>Tel: +54 9 11 6767 8899</li>
                        <li>Instagram: @chairstore.ok</li>
                        <li>email: info@chairstore.com.ar</li>
                    </section>
                </div>
                {sending? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}
                <div class="finalizar-form">
                    <input type="submit" value="Enviar"/>
                </div>
            </form>
            </div>
    );
}

export default ContactosPage;