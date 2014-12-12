var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var chatSocket = require('./src/chatController.js')(io);


app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', function(request, response){
  response.sendFile(__dirname + '/index.html');
});

var port = process.env.PORT || 3000)

server.listen(port, function(){
  console.log("Listening on port " + port)
})

module.exports = server;