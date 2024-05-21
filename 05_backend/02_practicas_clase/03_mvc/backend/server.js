const express = require("express");
const app = express();
const db = require("./config/database");
const AutorRoute = require("./routes/AutorRoute");

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send({ mensaje:'hola mundo' });  
});

db.conectmongo();

//Rutas
app.use('/api/v1', AutorRoute);

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
})