const dbcon = require('../models/db.js');

const v = (usr, pwd, resp) => {
	let retval = {
		error: "99",
		errmsg: "Algo raro salió muy raro"
	};
	let qry = "select id, nombre from usuario where email = '"+usr+"' and passwd = password('"+pwd+"');";
	console.log("Entra a validar usuario...");
	dbcon.query(qry, (err, res, campos) => {
		if (err) {
			//Marcamos el error
			console.log(err + "\n:(");
			retval.error = "98";
			retval.errmsg = "Falló la consulta a los comentarios";
		} else {
			if (res.length == 1) {
				consle
				retval.error = "0";
				retval.errmsg = "";
				retval.idusuario = res[0].id;
				retval.nombre = res[0].nombre;
				console.log("Firmado exitoso!");
				resp.json(retval);
			}
		}
		resp.end();
	});
};

module.exports = {
	valida: (usr, pwd, resp) => v(usr, pwd, resp)
}
