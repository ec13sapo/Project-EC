import React from "react";
import './../styles/components/pages/ContactosPage.css'

const ContactosPage = (props) => {
    return (
        <div class="contacto">
                <form action="" method="" class="formulario">
                    <div>
                        <label for="nom">NOMBRE</label>
                        <input type="text" name="nombre" />
                    </div>
                    <div>
                        <label for="mail">MAIL</label>
                        <input type="text" name="mail" />
                    </div>
                    <div>
                        <label for="consul">DETALLE DE LA CONSULTA</label>
                        <textarea name="consulta" id="consulta" cols="50" rows="10"></textarea>
                    </div>
                    <div class="finalizar-form">
                        <input type="submit" value="Enviar"/>
                        <input type="reset" value="Cancelar"/>
                    </div>
                </form>
            </div>
    );
}

export default ContactosPage;