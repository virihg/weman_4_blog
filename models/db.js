var driver = require('mysql');

var dbcon = driver.createConnection({
	host: 'lab.achichincle.net',
	user: 'usrwblog',
	password: 'w3m4nc0NN3ct',
	database: 'wemanblog',
	port: 3714
});

module.exports = dbcon;
