const express = require ('express');
const autorController = require('../controllers/autorController');

const AutorRoute = express.Router();

AutorRoute.get('/autores', autorController.getAllAutores);

module.exports = AutorRoute;