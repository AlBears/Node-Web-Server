var express = require('express');
var app = express();
var PORT = 3000;
// app.get('/', function (req, res){
// 	res.send('Hello Express!');
// });

var middlware = require('./middleware.js');

app.use(middlware.logger);

app.get('/about', middlware.requireAithentication, function (req, res){
	res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));
//console.log(__dirname + '/public');


app.listen(PORT, function () {
	console.log('Express server started at port '+PORT+'!');
});