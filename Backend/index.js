const express = require("express")
const path = require("path")
const morgan = require("morgan")
const app = express()
const cors = require("cors");
require('dotenv').config()

//Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.static('public'));
app.use(cors({origin: '*'}));

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

app.set('port',process.env.PORT || 5000);

app.listen (app.get ("port"), () => {
  console.log(`Servidor corriendo en el puerto ${app.get("port")}`)
})