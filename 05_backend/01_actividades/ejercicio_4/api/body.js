const express = require('express');
const router = express.Router();

router.use(express.json());

router.post('/api/body', (req, res) => {
    res.status(200).send(req.body);
})

module.exports = router;