const mysql = require('mysql');
require('dotenv').config();

const conectar = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

conectar.connect((err) => {
	if (err) {
		console.log('Error al conectar a la BD: ' + err);
	} else {
		console.log('Conectado a la DB');
	}
});

module.exports = conectar;
