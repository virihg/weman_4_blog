const dbcon = require('../models/db.js');

const leeComents = (resp) => {
	let retval = {
		error: "99",
		errmsg: "Algo raro salió muy raro"
	};
	let qry = "select * from publicacion;";
	console.log("Entra a revisar los comentarios...");
	dbcon.query(qry, (err, res, campos) => {
		if (err) {
			//Marcamos el error
			console.log(err + "\n:(");
			retval.error = "98";
			retval.errmssg = "Falló la consulta a los comentarios";
		} else {
			retval.error = "0";
			retval.errmsg = "";
			retval.registros = res;
			console.log("Encontró " + res.length + " registros");
			resp.json(retval);
		}
		resp.end();
	});
}

module.exports = {
	leeComentarios: (resp) => leeComents(resp)
}
