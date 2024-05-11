const express = require('express');
const router = express.Router();
const axios = require('axios');
const https = require('https');

router.get('/api/swapi/:personaje', async (req, res) => {
        
        let id = req.params.personaje

        let response = await axios.get(`https://swapi.dev/api/people/${id}/`, {
                httpsAgent: new https.Agent({ rejectUnauthorized: false })
              });

        let data = await response.data

        res.status(200).send({personaje:data})

})

module.exports = router;