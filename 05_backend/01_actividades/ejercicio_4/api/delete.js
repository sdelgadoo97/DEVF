const express = require('express');
const router = express.Router();

router.delete('/api/delete/:id', (req, res) => {
    let id = req.params.id;

    if (id == '3') {

        res.status(200).send({mensaje:`Se ha eliminado el objeto con ID ${id}`});

    } else {

        res.status(404).send({error:'No se encontró el objeto con el ID especificado'});
    }
})

module.exports = router;