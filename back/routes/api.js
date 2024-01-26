var express = require('express');
var router = express.Router();
var productosModel = require('./../models/productosModel');
var preguntasModel = require('./../models/preguntasModel');
var cloudinary = require('cloudinary').v2;

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

module.exports = router;