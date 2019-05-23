const dbcon = require('../controllers/db.js');

const leeComentarios = () => {
	let retval = {
		error: "99",
		errmsg: "Algo raro salió muy raro"
	};
	let qry = "select * from comentario;";
	dbcon.query(qry, (err, res, campos) => {
		if (error) {
			//Marcamos el error
			retval.error = "98";
			retval.errmssg = "Falló la consulta a los comentarios";
		} else {
			retval.error = "0";
			retval.errmsg = "";
			retval.registros = res;
		}
	});
}

module.exports = leeComentarios;
module.exports = retval;
