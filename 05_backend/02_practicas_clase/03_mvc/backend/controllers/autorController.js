const Autores = require("../models/Autores");

const getAllAutores = async (req, res) => {
    const autores = await Autores.find();
    res.send({data:autores})
}

module.exports = {getAllAutores};