const express = require('express');
const route = express.Router();
const pagoController = require('../controller/pagos.controller.js');

route.get('/', (req, res) => {
	res.send('Hola Mundo');
});

route.get('/pagos', pagoController.getPagos);
route.get('/pagos/:id', pagoController.getPago);

route.post('/pagos', pagoController.setPagos);
route.put('/pagos/:id', pagoController.updatePagos);
route.delete('/pagos/:id', pagoController.deletePagos);

module.exports = route;