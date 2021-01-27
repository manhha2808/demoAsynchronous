$(document).ready(function() {
    let socket = io.connect('localhost:3000');
    socket.on('greeting', function(data) {
        console.log(data);
    });

    socket.on('sendUserToClient', function(data) {
        console.log(data);
        renderUserHTML(data.Users);
        renderTeamHTML(data.Teams);
        $('#ajaxModal').modal('show');
    });

    socket.on('other-user', function(data) {
        console.log(data);
        // alert(data + ' show team detail!')
    });

    $(document).on('click', '#get-user', function(e) {
        e.preventDefault();
        socket.emit('get-data');
    });
});