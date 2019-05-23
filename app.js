var express = require('express');
var app = express();

var rtr = require('./routes/index.js');

app.use('/', rtr);
app.listen(3000);
