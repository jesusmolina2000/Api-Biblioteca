const conexion = require('../config/database');

exports.getPagos = (req, res) => {
	try {
		conexion.query('SELECT * FROM pagos', (err, rows, fields) => {
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

exports.getPago = (req, res) => {
	try {
		conexion.query(`SELECT * FROM pagos WHERE id = ${req.params.id}`, (err, rows, fields) => {
			if (!err) {
				res.json(rows[0]);
			} else {
				res.json({ status: 'No existe el psgo' });
			}
		});
	} catch (error) {
		console.log(error);
		res.status(500).send('Hubo un error');
	}
};

exports.setPagos = (req, res) => {
	try {
		const { valor, created } = req.body;
		let query = `INSERT INTO pagos SET?`;

		const pagoObj = {
			valor,
			created,
		};

		conexion.query(query, pagoObj, (err, rows, fields) => {
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

exports.updatePagos = (req, res) => {
	try {
		const { id } = req.params;
		const { valor, concepto, modified } = req.body;
		let query = `UPDATE pagos SET valor = '${valor}', concepto ='${concepto}', modified = '${modified}'
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

exports.deletePagos = (req, res) => {
	try {
		const { id } = req.params;
		let query = `DELETE FROM pagos WHERE id = ${id}`;

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
