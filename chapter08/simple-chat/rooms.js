/**
 * Created by Sangjun on 2015. 7. 27..
 */

var Chat = require('./chat');

module.exports = function(app) {
    var http = require('http').Server(app);
    var io = require('socket.io')(http);
    var Room = io.of('/room')
        .on('connection', function(socket) {
            var joinedRoom = null;
            socket.on('join', function(data) {
                if (Chat.hasRoom(data.roomName)) {
                    joinedRoom = data.roomName;
                    socket.join(joinedRoom);
                    socket.emit('joined', {
                        isSuccess: true,
                        nickName: data.nickName
                    });
                    socket.broadcast.to(joinedRoom).emit('joined', {
                        isSuccess: true,
                        nickName: data.nickName
                    });
                } else {
                    socket.emit('joined', {
                        isSuccess: false
                    })
                }
            });
        });
}