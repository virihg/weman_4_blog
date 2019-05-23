const express = require('express');
const router = express.Router();
const ruta = require('path');
const appDir = ruta.dirname(require.main.filename);
const fs = require('fs');
const lc = require('../middlewares/leecoments.js');
const seg = require('../middlewares/cancervero.js');

//var dbcon = require('../models/db.js');
//var seguridad = require('../models/usuarios.js');

router.get('/', (pet, resp) => {
	const ppal = fs.readFileSync(appDir + '/views/index.html').toString('utf8');
	//Regresamos la página principal...
	resp.send(ppal);
});

router.get('/comentarios', (pet, resp) => {
	//Aquí vamos a enviar los comentarios en formato JSON. Lo haremos de manera asíncrona.
	//Esperar el asíncrono...
	lc.leeComentarios(resp);
	/*
	console.log("Termina la ejecución de la función y dijo: ");
	console.log(res);
	resp.json(res);
*/
});

router.post('/login', (pet, resp) => {
	//Vamos a hacer la petición de entrada aquí...
	console.log("Petición de acceso para usuarios");
	let res = seg.valida(pet.body.usr, pet.body.pwd, resp);
});

router.post('/publica', (pet, resp) => {
	lc.publica(pet.body.idusr, pet.body.titulo, pet.body.texto);
});
/*
router.post('/login', seguridad, () => {
	var usr = req.usr.email;
	var pwd = req.usr.pwd;
});
*/

module.exports = router;
