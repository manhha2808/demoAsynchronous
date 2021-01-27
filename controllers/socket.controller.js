const Users = require('../models/users.model.json');
const Teams = require('../models/teams.model.json');

let run = function(socket) {
    socket.on('get-data', function() {
        let dataArray = {
            Users,
            Teams
        };

        // socket.emit('sendUserToClient', dataArray);
        socket.broadcast.emit('other-user', socket.id);
        // socket.broadcast.emit('sendUserToClient', data); // for all client except user click
        // socket.emit('sendUserToClient', data); // for only user click
        io.sockets.emit('sendUserToClient', dataArray); // for all user
    });

    socket.emit('greeting', 'Connected to SocketIO');
}

module.exports = run;