var pool = require('./db');

async function getPreguntas(){
    var query = "select * from preguntas_frecuentes order by id desc";
    var rows = await pool.query(query);
    return rows;
}

async function insertPregunta(obj){
    try{
        var query = "insert into preguntas_frecuentes set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    }catch(error){
        console.log(error);
        throw error;
    }
}

async function getPreguntaById(id){
    var query = "select * from preguntas_frecuentes where id = ?"
    var rows = await pool.query(query,[id]);
    return rows[0];
}

async function editPregunta(obj,id){
    try{
        var query = "update preguntas_frecuentes set ? where id=?";
        var rows = await pool.query(query, [obj,id]);
        return rows;
    }catch(error){
        console.log(error);
        throw error;
    }
}

async function deletePreguntaById(id){
    var query = "delete from preguntas_frecuentes where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

module.exports = {getPreguntas, insertPregunta, getPreguntaById, editPregunta, deletePreguntaById}