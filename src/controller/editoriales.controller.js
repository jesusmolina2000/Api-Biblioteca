const conexion = require('../config/database');

exports.getEditoriales = (req, res) => {
	try {
		conexion.query('SELECT * FROM editoriales', (err, rows, fields) => {
			if (!err) {
				res.json(rows);
			} else {
				res.json({ status: 'No hay datos' });
			}
		});
	} catch (error) {
		console.log(error);
		res.status(500).send('Hubo un error');
	}
};

exports.getEditorial = (req, res) => {
	try {
		conexion.query(`SELECT * FROM editoriales WHERE id = ${req.params.id}`, (err, rows, fields) => {
			if (!err) {
				res.json(rows[0]);
			} else {
				res.json({ status: 'No existe el editorial' });
			}
		});
	} catch (error) {
		console.log(error);
		res.status(500).send('Hubo un error');
	}
};

exports.setEditoriales = (req, res) => {
	try {
		const { nombre, created } = req.body;
		let query = `INSERT INTO editoriales SET?`;

		const editorialObj = {
			nombre,
			created,
		};

		conexion.query(query, editorialObj, (err, rows, fields) => {
			if (!err) {
				res.json({ status: 'Guardado con exito' });
			} else {
				res.json({ status: 'Error al Guardar' });
			}
		});
	} catch (error) {
		console.log(error);
		res.status(500).send('Hubo un error');
	}
};

exports.updateEditoriales = (req, res) => {
	try {
		const { id } = req.params;
		const { nombre, modified } = req.body;
		let query = `UPDATE editoriales SET nombre = '${nombre}', modified = '${modified}'
							WHERE id = ${id}`;

		conexion.query(query, (err, rows, fields) => {
			if (!err) {
				res.json({ status: 'Actualizado con exito' });
			} else {
				res.json({ status: 'Error al Actualizar' });
			}
		});
	} catch (error) {
		console.log(error);
		res.status(500).send('Hubo un error');
	}
};

exports.deleteEditoriales = (req, res) => {
	try {
		const { id } = req.params;
		let query = `DELETE FROM editoriales WHERE id = ${id}`;

		conexion.query(query, (err, rows, fields) => {
			if (!err) {
				res.json({ status: 'Eliminado con exito' });
			} else {
				res.json({ status: 'Error al Eliminar' });
			}
		});
	} catch (error) {
		console.log(error);
		res.status(500).send('Hubo un error');
	}
};
