


var socket = io();
socket.on('connect', function () {
    console.log('Connected to server!!!');  

    //For Email Address
    // socket.emit('createEmail',  {
    //     to: 'jen@example.com',
    //     text: 'Waseem Here...'
    // })
});


socket.on('disconnect', function () {
    console.log('Disconnected to server!!!');
});


socket.on('newEmail', function(email){
    console.log('New Email', email);
})

socket.on('newMessage' , function(message){
    console.log('newMessage', message);
})