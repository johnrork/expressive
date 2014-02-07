window.onload = function() {

    window.messages = [];
    window.socket = io.connect('http://10.6.31.50:3000');
    body = document.getElementsByTagName('textarea')

    socket.on('message', function (data) {
        if(data.message) {
            body[0].value = data.message
        } else {
            console.log("There is a problem:", data);
        }
    });

    document.onkeydown = function(e){
        setTimeout(function(){
            socket.emit('send', {message: e.target.value})
        })
    }

    // sendButton.onclick = function() {
    //     if(name.value == "") {
    //         alert("Please type your name!");
    //     } else {
    //         var text = field.value;
    //         socket.emit('send', { message: text, username: name.value });
    //     }
    // };

}
