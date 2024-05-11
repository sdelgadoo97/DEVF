const express = require("express");
const SumaRoute = require("./api/suma");
const UsuarioRoute = require("./api/usuario");
const SwapiRoute = require("./api/swapi");
const BodyRoute = require("./api/body");
const SumaPostRoute = require("./api/suma_post");
const DeleteRoute = require("./api/delete");

const app = express();

app.get("/api/", (req, res) => {
    res.status(200).send({ mensaje:'hola mundo' });  
  });

app.use(SumaRoute);
app.use(UsuarioRoute);
app.use(SwapiRoute);
app.use(BodyRoute);
app.use(SumaPostRoute);
app.use(DeleteRoute);


app.listen(9714, () => {
  console.log("Servidor corriendo en el puerto 9714");
})