$(document).ready(function () {
    let socket = io.connect('localhost:3000');
    socket.on('greeting', function(data){
        alert(data);
    });

    socket.on('abc', function (data) {
        console.log(data);
    });

    $(document).on('click', '#alert-msg', function (e) {
        e.preventDefault();
        socket.emit('user-join', 'HaDNM');
    });
});
