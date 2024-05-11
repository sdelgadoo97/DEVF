const express = require('express');
const router = express.Router();

router.get('/api/suma', (req, res) => {
    let num1 = req.query.num1;
    let num2 = req.query.num2;

    if (num1 && num2) {
        res.status(200).send({resultado:parseInt(num1) + parseInt(num2)});
    }

})

module.exports = router;