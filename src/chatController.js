var socket = function(io) {
  io.on('connection', function(socket){
    
    console.log('a user is connected');

    socket.on('disconnect', function(){
      console.log('user disconnected')
    })

    socket.on('chat message', function(msg){
      console.log('message: ' + msg);
    });

  });
}

module.exports = socket;