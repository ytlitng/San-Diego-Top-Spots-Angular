$( document ).ready(function() {
    console.log( "ready!" );
});

// let message = {
//   username: 'Cameron',
//   message: 'Looks like somebody is running the sample!'
$('#name').val();
$('#message').val();


};

$.post('http://originmessages.herokuapp.com/messages', message, function(data) {
  alert('Data sent to server');
})
