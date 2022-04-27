const conexion = require('../config/database');

exports.getLibros = (req, res) => {
	try {
		conexion.query('SELECT * FROM Libros', (err, rows, fields) => {
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

exports.getLibro = (req, res) => {
	try {
		conexion.query(`SELECT * FROM Libros WHERE id = ${req.params.id}`, (err, rows, fields) => {
			if (!err) {
				res.json(rows[0]);
			} else {
				res.json({ status: 'No existe el Libro' });
			}
		});
	} catch (error) {
		console.log(error);
		res.status(500).send('Hubo un error');
	}
};

exports.setLibros = (req, res) => {
	try {
		const { titulo, descripcion, created } = req.body;
		let query = `INSERT INTO Libros SET?`;

		const LibroObj = {
			titulo,
            descripcion,
			created,
		};

		conexion.query(query, LibroObj, (err, rows, fields) => {
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

exports.updateLibros = (req, res) => {
	try {
		const { id } = req.params;
		const { titulo, descripcion, precio, ejemplares, autor, editorial, categoria, modified } = req.body;
		let query = `UPDATE Libros SET titulo = '${titulo}', descripcion ='${descripcion}', precio='${precio}',
        ejemplares='${ejemplares}', autor='${autor}', editoria='${editorial}', categoria='${categoria}', modified = '${modified}'
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

exports.deleteLibros = (req, res) => {
	try {
		const { id } = req.params;
		let query = `DELETE FROM Libros WHERE id = ${id}`;

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
