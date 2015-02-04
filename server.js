var express = require('express');
var path = require('path'); 
//var mongoose = require('mongoose');
var fs = require('fs');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname + '/client')));



function home (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.render('index.html');
};

app.get('/', home);


io.on('connection', function(socket){
  console.log('a user connected');
}); 


var port = process.env.PORT || 3224; 


http.listen(port, function() {
    console.log('Listening on port %d', port);
});