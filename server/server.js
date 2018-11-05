const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port  = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New User Connected');
        
    //Email Socket Emit
    // socket.emit('newEmail', {
    //     from: 'johnDoe@example.com',
    //     text: 'Hey. Whats up',
    //     createAt: 123,
    // });

    //ForMessage
     socket.on('createMessage', (message) => {
         console.log('createMessage', message)
         io.emit('newMessage', {
             from: message.from,
             text: message.text,
             createAt: new Date().getTime()
         });
     });

    //For EMail Address
    // socket.on('createEmail', (newEmail) => {
    //     console.log('createEmail', newEmail);
    // });

    socket.on("disconnect", ()=>{
        console.log("User was diconnected")
    })

});

server.listen(port, () => {
    console.log(`Server is up on ${port}`);
});