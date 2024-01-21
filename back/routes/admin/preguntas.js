var express = require('express');
var router = express.Router();
var preguntasModel = require('./../../models/preguntasModel');

router.get('/', async function(req,res,next){
    var preguntas = await preguntasModel.getPreguntas();
    res.render('admin/preguntas', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        preguntas
    });
});

router.get('/agregar', (req,res,next)=>{
    res.render('admin/agregarPregunta', {
        layout: 'admin/layout'
    });
});

router.post('/agregar', async(req,res,next) =>{
    try{
        if(req.body.pregunta != "" && req.body.respuesta != ""){
            await preguntasModel.insertPregunta(req.body);
            res.redirect('/admin/preguntas')
        }else{
            res.render('admin/agregarPregunta',{
                layout: 'admin/layout',
                error: true, message: 'Todos los campos son requeridos'
            })
        }
    }catch(error){
        console.log(error)
        res.render('admin/agregarPregunta',{
            layout: 'admin/layout',
            error: true, message: 'No se cargo la pregunta'
        });
    }
});

router.get('/editar/:id', async(req,res,next)=>{
    var id = req.params.id;
    let pregunta = await preguntasModel.getPreguntaById(id);
    res.render('admin/editarPregunta',{
        layout: 'admin/layout',
        pregunta
    });
});

router.post('/editar', async(req,res,next) =>{
    try{
        if(req.body.pregunta != "" && req.body.respuesta != ""){
            await preguntasModel.editPregunta(req.body, req.body.id);
            res.redirect('/admin/preguntas')
        }else{
            res.render('admin/editarPregunta',{
                layout: 'admin/layout',
                error: true, message: 'Todos los campos son requeridos'
            })
        }
    }catch(error){
        console.log(error)
        res.render('admin/editarPregunta',{
            layout: 'admin/layout',
            error: true, message: 'No se cargo la pregunta'
        });
    }
});

router.get('/eliminar/:id', async(req,res,next) =>{
    var id = req.params.id;
    await preguntasModel.deletePreguntaById(id);
    res.redirect('/admin/preguntas')
});

module.exports = router;