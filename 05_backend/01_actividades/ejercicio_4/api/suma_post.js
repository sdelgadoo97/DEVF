const express = require('express');
const router = express.Router();

router.use(express.json());

router.post('/api/suma', (req, res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    res.status(200).send({resultado:parseInt(num1) + parseInt(num2)});
})

module.exports = router;