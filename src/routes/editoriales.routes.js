const express = require('express');
const route = express.Router();
const editorialesController = require('../controller/editoriales.controller');

route.get('/editoriales', editorialesController.getEditoriales);
route.get('/editoriales/:id', editorialesController.getEditorial);

route.post('/editoriales', editorialesController.setEditoriales);
route.put('/editoriales/:id', editorialesController.updateEditoriales);
route.delete('/editoriales/:id', editorialesController.deleteEditoriales);

module.exports = route;
