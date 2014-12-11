var socket = function(io) {
  io.on('connection', function(socket){
    
    io.emit('login', 'User connects')

    socket.on('disconnect', function(){
      console.log('user disconnected')
    })

    // server receives a message and then broadcasts that message out

    socket.on('chat message', function(msg){
      io.emit('chat message', msg)
    });

  });
}

module.exports = socket;