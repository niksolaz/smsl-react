var express = require('express');
var app = express();
var react =require('react');
var http = require('http').Server(app);
var port = process.env.PORT || 3000;
var document_Main = require('./main.js');

app.set('view engine','html');

app.get('/',function(req,res){
	res.render(document_Main);
});

app.listen(port);
console.log('Web chat app in connected: ' + port);