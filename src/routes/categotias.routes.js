const express = require('express');
const route = express.Router();
const categoriaController = require('../controller/categoria.controller');

route.get('/', (req, res) => {
	res.send('Hola Mundo');
});

route.get('/categorias', categoriaController.getCategorias);
route.get('/categorias/:id', categoriaController.getCategoria);

route.post('/categorias', categoriaController.setCategorias);
route.put('/categorias/:id', categoriaController.updateCategorias);
route.delete('/categorias/:id', categoriaController.deleteCategoria);

module.exports = route;
