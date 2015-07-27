/**
 * Created by Sangjun on 2015. 7. 27..
 */

var Chat = require('./chat');

module.exports = function(server) {
    var io = require('socket.io').listen(server);
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

                    Chat.joinRoom(joinedRoom, data.nickName);
                } else {
                    socket.emit('joined', {
                        isSuccess: false
                    })
                }
            });

            socket.on('message', function(data) {
                if (joinedRoom) {
                    socket.broadcast.to(joinedRoom).json.send(data);
                }
            });

            socket.on('leave', function(data) {
                if (joinedRoom) {
                    Chat.leaveRoom(joinedRoom, data.nickName);
                    socket.broadcast.to(joinedRoom).emit('leaved', {
                        nickName: data.nickName
                    });
                    socket.leave(joinedRoom);
                }
            })
        });

    var WaitingRoom = io.of('/waitingRoom')
        .on('connection', function(socket) {
            socket.on('join', function(data) {
               socket.join('waitingRoom');
            });
            socket.on('makeWaitingRoom', function(data, callback) {
                if (Chat.hasRoom(data.roomName)) {
                    socket.broadcast.to('waitingRoom').emit('madeWaitingRoom', {
                        roomName: data.roomName
                    });
                    socket.broadcast.to('waitingRoom').json.send({roomName: data.roomName});

                    return callback({isSuccess: true});
                } else {
                    return callback({isSuccess: false});
                }
            });
        })

}