var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
// var socket = require('./src/socketController.js')(io);
var chatSocket = require('./src/chatController.js')(io);


app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', function(request, response){
  response.sendFile(__dirname + '/index.html');
});

app.get('/sockets', function(request, response){
  response.render('socket.ejs');
});

module.exports = server;