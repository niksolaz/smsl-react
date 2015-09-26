var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 3000;


app.get('/',function(req,res){
	res.send('<h1>Hello Smsl React<h1>');
});

app.listen(port);
console.log('Web chat app in connected: ' + port);