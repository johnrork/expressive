var express = require('express')
var stylus = require('stylus')
var app = express()
var io = require('socket.io')

// app.configure('development', function(){
    app.set('views', __dirname + '/views')
    app.set('view engine', 'jade')

    app.use(stylus.middleware({
        src: __dirname+'/stylus',
        dest: __dirname+'/static',
        debug: true,
        force: true
    }));
    app.use(express.static(__dirname+'/static'))

// });

app.get('/hello', function(req, res){
    res.render("index", {message: "hello"})
})

sock = io.listen(app.listen(3000));
sock.enable('browser client minification');
sock.sockets.on('connection', function (socket) {
    // socket.emit('message', { message: 'welcome to the chat' });
    socket.on('send', function (data) {
        sock.sockets.emit('message', data);
    });
});

console.log('listening')
