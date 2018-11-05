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
    

    socket.emit('newMessage', {
        from: 'John',
        text: 'See you there...',
        createAt: 123123
    });

    //Email Socket Emit
    // socket.emit('newEmail', {
    //     from: 'johnDoe@example.com',
    //     text: 'Hey. Whats up',
    //     createAt: 123,
    // });

    //ForMessage
     socket.on('createMessage', (message) => {
         console.log('createMessage', message);
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