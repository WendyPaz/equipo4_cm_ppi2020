const express = require("express")
const path = require("path")
const morgan = require("morgan")
const app = express()

//Middlewares
app.use(morgan('dev'))
app.use(express.json())

//Routes
app.use("/api/", require("./routes/usuario.js"))
app.use("/api/", require("./routes/fecha.js"))
app.use("/api/", require("./routes/pyp.js"))

app.get("/", (req, res) => {
  res.send("Datos usuario")
})
app.get("/api", (req, res) => {
  res.send("Inserte una URL: /usuario")
})

app.set("ABSOLUTE_PATH", `${__dirname}/`)
app.set("puerto", 8081)

app.listen (app.get ("puerto"), () => {
  console.log(`Servidor corriendo en el puerto ${app.get("puerto")}`)
})