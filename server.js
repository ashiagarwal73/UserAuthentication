const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
var express = require('express');
var bodyParser = require('body-parser');
var expressApp = express();
expressApp.use(bodyParser.urlencoded({ extended: true })); 
expressApp.post('/login', function(req, res) {
	if(req.body.username==="ashi"&&req.body.password==="Imashi"){
  		res.send('You are authenticated user</br>'+`Welcome ${req.body.username}`);
  	}
	else{
		res.send('You are not Autherised to access');
	}
});
expressApp.listen(port, function() {
  console.log(`Server running at http://${hostname}/${port}/login`);
});