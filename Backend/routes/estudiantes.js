const {Router} = require ("express")
const router = Router()
const fs = require("fs")
const FileEstudiantes = fs.readFileSync ('./estudiantes.json', 'utf-8')
const JSONEstudiantes = JSON.parse(FileEstudiantes)

console.log(JSONEstudiantes)

router.get("/api", (req, res) => {
  res.send("API REST ESTUDIANTES")
})

router.get("/estudiantes", (req, res) => {
  res.json(JSONEstudiantes)
})

router.post("/estudiantes", (req, res) => {
  let id = JSONEstudiantes.length + 1
  let {correo, contraseña, placa, vehiculo, html} = req.body
  let nuevoEstudiante =
    {
    "id" : id,
    "correo" : correo,
    "contraseña" : contraseña,
    "placa" : placa,
    "vehiculo" : vehiculo,
    "html" : html,
  }
  
  JSONEstudiantes.push(nuevoEstudiante)

  fs.writeFileSync('./estudiantes.json',
  JSON.stringify(JSONEstudiantes), 'utf-8')
  res.json(nuevoEstudiante)
})

router.get("/estudiantes/:id", (req, res) => {
let id = req.params.id
let estudianteEncontrado = JSONEstudiantes.find(estudiante => estudiante.id ==id)

if(estudianteEncontrado != undefined)
  res.status(200).json(estudianteEncontrado)
  else
  res.json(`El ID ${id} no existe`)
})

router.put("/estudiantes/:id", (req,res) => {
  let id = req.params.id 
  let {correo, contraseña, placa, vehiculo, html} = req.body

  let estudianteModifcado = JSONEstudiantes.find(estudiante => {
    if(estudiante.id == id){
      estudiante.correo = correo
      estudiante.contraseña = contraseña
      estudiante.placa = placa
      estudiante.vehiculo = vehiculo
      estudiante.html = html
      return estudiante
    }
  })

  if(estudianteModifcado != undefined){
    fs.writeFileSync('./estudiantes.json', JSON.stringify(JSONEstudiantes), 'utf-8')
    res.status(201).json(estudianteModifcado)
  }else{
    res.status(200).json(`El ID ${id} no existe`)
  }

})

router.delete("/estudiantes/:id", (req, res) => {
  let id = req.params.id
  let indexEstudiante = JSONEstudiantes.findIndex(estudiante => estudiante.id == id)
  if(indexEstudiante != -1){
    JSONEstudiantes.splice(indexEstudiante, 1)
    fs.writeFileSync('./estudiantes.json', JSON.stringify(JSONEstudiantes), 'utf-8')
    res.status(200).json({mensaje : `Estudiante ${id} fue eliminado`})
  }else{
    res.json(`El id ${id} no existe`)
  }
})

module.exports = router