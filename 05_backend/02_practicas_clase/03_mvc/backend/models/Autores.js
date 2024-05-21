const mongoose = require("mongoose");

const autorSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellidos: {
        type: String,
        required: true,
    },
});

const Autores = mongoose.model("Autores", autorSchema)

module.exports = Autores;