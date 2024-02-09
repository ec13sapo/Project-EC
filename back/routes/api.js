var express = require('express');
var router = express.Router();
var productosModel = require('./../models/productosModel');
var preguntasModel = require('./../models/preguntasModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/preguntas',  async function (req,res,next) {
    let preguntas = await preguntasModel.getPreguntas();
    
    res.json(preguntas);
});

router.get('/productos',  async function (req,res,next) {
    let productos = await productosModel.getProductos();
    
    productos = productos.map(productos => {
        if(productos.id_imagen){
            const imagen = cloudinary.url(productos.id_imagen, {
                width: 300,
                height: 300,
                crop: 'fill'
            });
            return{
                ...productos,
                imagen
            }
        }else{
            return{
                ...productos,
                imagen: ''
            }
        }
    });

    res.json(productos);
});

router.post('/contacto',async(req,res) =>{
    const mail = {
        to: 'ezequiel.saporito@gmail.com',
        subject: 'Contacto Web',
        html: `${req.body.nombre} se contacto a traves de la web y quiere mas información a este correo: ${req.body.email} <br> Además, hizo el siguiente comentario: ${req.body.mensaje} <br> su tel es: ${req.body.telefono}`
    }
    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });
});

module.exports = router;