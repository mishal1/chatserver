var socket = function(io) {
  io.on('connection', function(socket){

    socket.on('disconnect', function(){
      console.log('user disconnected')
    })

    // server receives a message and then broadcasts that message out

    socket.on('chat message', function(msg){
      socket.broadcast.emit('chat message', msg)
    });

    socket.on('username', function(username){
      socket.username = username;
      socket.broadcast.emit('login', username + ' is in the HOUSE!')
    });

  });
}

module.exports = socket;