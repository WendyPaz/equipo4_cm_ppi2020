const { Router } = require('express');
const router = Router();
const mysqlConnection = require('./../db/mysql_pool');

//get

router.get('/pyp',(req,res)=>{
  mysqlConnection.query('SELECT * FROM pyp ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
})

//get id

router.get('/pyp/:id',(req,res)=>{
  const {id} = req.params;
  mysqlConnection.query('SELECT * FROM pyp WHERE id_placa = ?',[id],(err,row,fields)=>{
    if(!err){
      res.json(row[0])
    }else{
      res.status(502).json({mensaje:"Error2"})
    }
  })
})

//put

router.put('/pyp/:id', (req, res) => {
  try{
    const id_placa = req.params.id
    const {
      dias,
      placa
    } = req.body

    mysqlConnection.query(`UPDATE pyp
                      SET dias = ?, placa = ? WHERE id_placa = ?`,[dias, placa, id_placa], (error, resulset, fields) => {
                        if(error){
                          res.status(502).json({mensaje: "Error en motor de base de datos."})
                        }else{
                          res.status(201).json({
                            id_placa : id_placa,
                            dias : dias,
                            placa : placa
                          })
                        }
                      } 
                    )


  }catch(error){
    res.status(502).json({mensaje : "Error en el servidor."})
  }
})

//post
router.post('/pyp', (req, res) => {
  try{
    const {
      dias,
      placa
    } = req.body    
    const SQL = `INSERT INTO pyp (dias, placa)
                  VALUES(?,?)`
    const parametros = [dias, placa]
    mysqlConnection.query(SQL, parametros, (error, results, fields) => {
      if(error){
        console.log(error)
        res.status(502).json({mensaje : 'Error ejecutando la consulta.'})
      }else{
        console.log(results)
        res.status(201).json({
                              id_placa : results.insertId,
                              dias : dias,
                              placa : placa})
      }
    })
  }catch(error){
    res.status(502).json({mensaje:"Error en el servidor"})
  }
})

//delete
router.delete('/pyp/:id', (req, res) => {
  try{
    const {id} = req.params
    const SQL = `DELETE FROM pyp WHERE id_placa = ?`
    mysqlConnection.query(SQL, [id], (error, results, fields) => {
      if(error){
        if (error.code === 'ER_ROW_IS_REFERENCED'){
        res.status(502).json({mensaje : 'Este registro se encuentra relacionado con otra entidad'})
        } else {
           res.status(502).json({mensaje : 'Error ejecutando la consulta'})
        }
      }else{
        if(results.affectedRows > 0)
          res.json({mensaje : "Registro eliminado"})
        else
          res.json({mensaje : "El registro no existe"})
      }
    })
  }catch(error){
    res.status(502).json({mensaje:"Error en el servidor"})
  }
})



module.exports = router;