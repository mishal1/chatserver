var socket = io.connect('/');

// user enters a message
$('form').submit(function(){
  socket.emit('chat message', $('#m').val());
  $('#m').val('');
  return false;
});

// user receives a broadcast message
socket.on('chat message', function(msg){
  $('#messages').append($('<li>').text(msg));
});

socket.on('login', function(login_notification){
  $('#messages').append($('<li>').text(login_notification));
})