var express = require('express');
var path = require('path'); 
//var mongoose = require('mongoose');
var fs = require('fs');
var app = express();










app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname + '/client')));







function home (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.render('index.html');
};

app.get('/', home);





//var osc = require("osc");




var port = process.env.PORT || 3030; 


var server = app.listen(port, function() {
    					console.log('kk 3030');
							});



var io        = require('socket.io')(server);



io.on('connection', function(socket){
  console.log('c\'onnected');



var OscReceiver = require('osc-receiver')
  , receiver = new OscReceiver();
 
receiver.bind(9999);
 

 
receiver.on('message', function() {
 var address = arguments[0];
  var args = Array.prototype.slice.call(arguments, 1);

  console.log(address, args);

  io.emit('supguys', args)
});




});



 


