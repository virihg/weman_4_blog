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
	lc.leeComentarios();
	//Esperar el asíncrono...
	resp.json(lc.retval);
});

router.post('/login', (pet, resp) => {
	//Vamos a hacer la petición de entrada aquí...
	let res = seg.valida(pet.usr, pet.pwd);
	resp.json(res);
});

router.pst('/publica', (pet, resp) => {
	let res = lc.publicaComentario(pet.idusr, pet.titulo, pet.contenido, pet.archivo);
	resp.json(res);
});
/*
router.post('/login', seguridad, () => {
	var usr = req.usr.email;
	var pwd = req.usr.pwd;
});
*/

module.exports = router;
