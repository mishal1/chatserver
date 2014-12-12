var socket = io.connect('/');

// user enters a message
$('#usermessage').submit(function(){
  socket.emit('chat message', $('#m').val());
  $('#messages').append($('<li>').text($('#m').val()));
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

$('#login').submit(function(event){
  event.preventDefault()
  socket.emit('username', $('#username').val());
  $('#login').slideUp(function(){
    $('#loginpage').remove();
    $('#chatpage').fadeIn();
  });
});