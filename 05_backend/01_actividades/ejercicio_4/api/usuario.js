const express = require('express');
const router = express.Router();

router.get('/api/usuario/:usuario', (req, res) => {
    let name = req.params.usuario;

    res.status(200).send({usuario:name});

})

module.exports = router;