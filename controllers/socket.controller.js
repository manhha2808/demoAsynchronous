let run = function(socket){
    socket.on('user-join', function(data){
        socket.emit('abc', data);
    });
}

module.exports = run;
