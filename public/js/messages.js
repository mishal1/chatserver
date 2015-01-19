var socket = io.connect('/');

// user enters a message
$('#usermessage').submit(function(){
  var username = socket.username;
  socket.emit('chat message', username + ": " + $('#m').val());
  $('#messages').append($('<li>').text(username + ": " + $('#m').val()));
  $('#m').val('');
  return false;
});

$('#m').one('keypress', function(){
  $('#usertyping').append("someone is typing really slowly");
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
  socket.username = $('#username').val();
  socket.emit('username', $('#username').val());
  $('#login').slideUp(function(){
    $('#loginpage').remove();
    $('#chatpage').fadeIn();
  });
});