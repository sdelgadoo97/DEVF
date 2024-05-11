// 1. Llamar la biblioteca express
const express = require("express");
const ProductosRoutes = require('./api/v1/productos')

// 2. Crear una instancia de express
const app = express();

// 3. Declarar una ruta
app.get("/", (req, res) => {
  // req -> request
  // res -> response

  console.log(req)

  // Obtener dirección IP
  console.log(req.ip);

  res.send(`Hola ${req.query.name}`);
});

app.use(ProductosRoutes)

// 4. Lanzar el servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
})