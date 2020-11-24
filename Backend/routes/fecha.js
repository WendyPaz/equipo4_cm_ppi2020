const {Router} = require('express')
const router = Router()
const mysqlConnection = require('./../db/mysql_pool')

//get

router.get('/fecha',(req,res)=>{
  mysqlConnection.query('SELECT *, DATE_FORMAT(caducidad, "%Y-%m-%d") AS caducidad FROM fecha ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
})

//get id

router.get('/fecha/:id',(req,res)=>{
  const {id} = req.params;
  mysqlConnection.query('SELECT * FROM fecha WHERE id_soat = ?',[id],(err,row,fields)=>{
    if(!err){
      res.json(row[0])
    }else{
      res.status(502).json({mensaje:"Error2"})
    }
  })
})

//put

router.put('/fecha/:id', (req, res) => {
  try{
    const id_soat = req.params.id
    const {
      caducidad,
      vehiculo
    } = req.body

    mysqlConnection.query(`UPDATE fecha SET caducidad = ?, vehiculo = ? WHERE id_soat = ?`,[caducidad, vehiculo, id_soat], (error, rows, fields) => {
                        if(error){
                          console.log(error)
                          res.status(201).json({mensaje: "Error en motor de base de datos."})
                        }else{
                          res.status(502).json({
                            id_soat : id_soat,
                            caducidad : caducidad,
                            vehiculo : vehiculo
                          })
                        }
                      } 
                    )


  }catch(error){
    res.status(502).json({mensaje : "Error en el servidor."})
  }
})

//post

router.post('/fecha', (req, res) => {
  try{
    const {
      caducidad,
      vehiculo
    } = req.body    
    const SQL = `INSERT INTO fecha (caducidad, vehiculo)
                  VALUES(?,?)`
    const parametros = [caducidad, vehiculo]
    mysqlConnection.query(SQL, parametros, (error, results, fields) => {
      if(error){
        console.log(error)
        res.status(502).json({mensaje : 'Error ejecutando la consulta.'})
      }else{
        console.log(results)
        res.status(201).json({
                              id_soat : results.insertId,
                              caducidad : caducidad,
                              vehiculo : vehiculo
                              })
      }
    })
  }catch(error){
    res.status(502).json({mensaje:"Error en el servidor"})
  }
})

//delete 

router.delete('/fecha/:id', (req, res) => {
  try{
    const {id} = req.params
    const SQL = `DELETE FROM fecha WHERE id_soat = ?`
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