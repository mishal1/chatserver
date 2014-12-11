var socket = function(io) {
  io.on('connection', function(socket){
    console.log('a user is connected');
    socket.on('disconnect', function(){
      console.log('user disconnected')
    })
  });
}

module.exports = socket;