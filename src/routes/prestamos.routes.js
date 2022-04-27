const express = require('express');
const route = express.Router();
const prestamoController = require('../controller/prestamos.controller.js');

route.get('/', (req, res) => {
	res.send('Hola Mundo');
});

route.get('/prestamos', prestamoController.getPrestamos);
route.get('/prestamos/:id', prestamoController.getPrestamo);

route.post('/prestamos', prestamoController.setPrestamos);
route.put('/prestamos/:id', prestamoController.updatePrestamos);
route.delete('/prestamos/:id', prestamoController.deletePrestamos);

module.exports = route;