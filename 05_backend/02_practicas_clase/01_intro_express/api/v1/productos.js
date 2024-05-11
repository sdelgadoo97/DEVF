const express = require('express');
const router = express.Router();

const productos = [
    {
      id: 1,
      name: 'Escuadra',
      price: 123.45,
      image: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png'
    },
    {
      id: 2,
      name: 'Calculadora',
      price: 234.56,
      image: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png'
    },
    {
      id: 3,
      name: 'Globo Terraqueo',
      price: 345.67,
      image: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png'
    },
    {
        id: 4,
        name: 'Calculadora Cientifica',
        price: 234.56,
        image: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png'
    }
  ]


router.get ('/api/v1/productos', (req, res) => {
    let query = req.query;

    let resultproducts

    if (req.query.search) {
        resultproducts = productos.filter(producto => producto.name.includes(query.search));
    } else {
        resultproducts = productos
    }


    if (resultproducts.length == 0) {
        return res.status(404).send({data:resultproducts})
    }else{
        res.send({data:resultproducts})
        
    }
})

router.get('/api/v1/productos/:id', (req, res) => {
    let id = req.params.id
    let producto = productos.find(producto => producto.id == id)

    if (producto) {

        res.send({data:producto})
        
    } else {

        return res.status(404).send({error: 'No se encontro el producto'})
        
    }

})

module.exports = router