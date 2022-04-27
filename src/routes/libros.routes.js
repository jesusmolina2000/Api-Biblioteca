const express = require('express');
const route = express.Router();
const libroController = require('../controller/libros.controller.js');

route.get('/', (req, res) => {
	res.send('Hola Mundo');
});

route.get('/libro',libroController.getLibros);
route.get('libros/:id',libroController.getLibro);

route.post('libros',libroController.setLibros);
route.put('libros/:id',libroController.updateLibros);
route.delete('libros/:id',libroController.deleteLibros);

module.exports = route;