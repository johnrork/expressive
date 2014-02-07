var io = require('socket.io')

sock = io.listen(3000);
sock.sockets.on('connection', function (socket) {
    // socket.emit('message', { message: 'welcome to the chat' });
    socket.on('send', function (data) {
        sock.sockets.emit('message', data);
    });
});

console.log('listening')
