const {Router} = require('express')
const router = Router()
const mysqlConnection = require('./../db/mysql_pool')

//get

router.get('/usuario',(req,res)=>{
  mysqlConnection.query('SELECT * FROM usuario ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
})

//get id

router.get('/usuario/:id',(req,res)=>{
  const {id} = req.params;
  mysqlConnection.query('SELECT * FROM usuario WHERE id_usuario = ?',[id],(err,row,fields)=>{
    if(!err){
      res.json(row[0])
    }else{
      res.status(502).json({mensaje:"Error2"})
    }
  })
})

//put

router.put('/usuario/:id', (req, res) => {
  try{
    const Id_usuario = req.params.id
    const {
      Correo,
      Contraseña
    } = req.body

    mysqlConnection.query(`UPDATE usuario
                      SET Correo = ?, Contraseña = ? WHERE Id_usuario = ?`,[Correo, Contraseña, Id_usuario], (error, resulset, fields) => {
                        if(error){
                          res.status(502).json({mensaje: "Error en motor de base de datos."})
                        }else{
                          res.status(201).json({
                            Id_usuario : Id_usuario,
                            Correo : Correo,
                            Contraseña : Contraseña
                          })
                        }
                      } 
                    )

  }catch(error){
    res.status(502).json({mensaje : "Error en el servidor."})
  }
})

//post
router.post('/usuario', (req, res) => {
  try{
    const {
      Correo,
      Contraseña
    } = req.body    
    const SQL = `INSERT INTO usuario (Correo, Contraseña)
    VALUES(?,?)`
    const parametros = [Correo, Contraseña]
    mysqlConnection.query(SQL, parametros, (error, results, fields) => {
      if(error){
        console.log(error)
        res.status(502).json({mensaje : 'Error ejecutando la consulta.'})
      }else{
        console.log(results)
        res.status(201).json({
                              Id_usuario : results.insertId,
                              Correo : Correo,
                              Contraseña : Contraseña})
      }
    })
  }catch(error){
    res.status(502).json({mensaje:"Error en el servidor"})
  }
})



//delete

router.delete('/usuario/:id', (req, res) => {
  try{
    const {id} = req.params
    const SQL = `DELETE FROM usuario WHERE Id_usuario = ?`
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



module.exports = router