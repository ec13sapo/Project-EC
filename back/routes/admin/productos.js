var express = require('express');
var router = express.Router();
var productosModel = require('./../../models/productosModel');

var util = require('util');
var cloudinary = require('cloudinary').v2;

const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

router.get('/', async function(req,res,next){
    var productos = await productosModel.getProductos();

    productos = productos.map(producto =>{
        if(producto.id_imagen){
            const imagen = cloudinary.image(producto.id_imagen, {
                width: 100,
                height: 100,
                crop: 'fill'
            });
            return{
                ...producto,
                imagen
            }
        }else{
            return{
                ...producto,
                imagen: ''
            }
        }
    });

    res.render('admin/productos', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        productos
    });
});

router.get('/agregar', (req,res,next)=>{
    res.render('admin/agregarProducto', {
        layout: 'admin/layout'
    });
});

router.post('/agregar', async(req,res,next) =>{
    try{
        var id_imagen = '';
        if(req.files && Object.keys(req.files).length > 0){
            imagen = req.files.imagen;
            id_imagen = (await uploader(imagen.tempFilePath)).public_id;
        }
        if(req.body.nombre != "" && req.body.precio != ""){
            await productosModel.insertProducto({...req.body, id_imagen});
            res.redirect('/admin/productos')
        }else{
            res.render('admin/agregarProducto',{
                layout: 'admin/layout',
                error: true, message: 'Los campos Nombre y Precio deben estar completos'
            })
        }
    }catch(error){
        console.log(error)
        res.render('admin/agregarProducto',{
            layout: 'admin/layout',
            error: true, message: 'No se cargo el producto'
        });
    }
});

router.get('/editar/:id', async(req,res,next)=>{
    var id = req.params.id;
    let producto = await productosModel.getProductoById(id);
    res.render('admin/editarProducto',{
        layout: 'admin/layout',
        producto
    });
});

router.post('/editar', async(req,res,next) =>{
    try{
        let id_imagen = req.body.img_original;
        let borrar_img_vieja = false;
        if(req.body.img_delete == "1"){
            id_imagen = null;
            borrar_img_vieja = true
        }
        if(req.files && Object.keys(req.files).length > 0){
            imagen = req.files.imagen;
            id_imagen = (await uploader(imagen.tempFilePath)).public_id;
            borrar_img_vieja = true;
        }
        if(borrar_img_vieja && req.body.img_original){
            await(destroy(req.body.img_original));
        }

        let obj = {
            nombre: req.body.nombre,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            id_imagen
        }
        console.log(obj);
        await productosModel.editProducto(obj, req.body.id);
        res.redirect('/admin/productos');

    }catch(error){
        console.log(error)
        res.render('admin/editarProducto',{
            layout: 'admin/layout',
            error: true, message: 'No se cargo el producto'
        });
    }
});

router.get('/eliminar/:id', async(req,res,next) =>{
    var id = req.params.id;

    let producto = await productosModel.getProductoById(id);
    if(producto.id_imagen){
        await(destroy(producto.id_imagen));
    }

    await productosModel.deleteProductosById(id);
    res.redirect('/admin/productos')
});

module.exports = router;