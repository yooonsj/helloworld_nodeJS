/**
 * Created by Sangjun on 2015. 7. 26..
 */

var Chat = module.exports = {
    users: [],
    rooms: [],
    hasUser: function(nickname) {
        var users = this.users.filter(function(element) {
            return (element === nickname);
        });

        if (users.length > 0) {
            return true;
        } else {
            return false;
        }
    },
    addUser: function(nickname) {
        this.users.push(nickname);
    },
    hasRoom: function(roomName) {
        var rooms = this.rooms.filter(function(element) {
            return (element.name === roomName);
        });

        if (rooms.length > 0) {
            return true;
        } else {
            return false;
        }
    },
    addRoom: function(roomName) {
        this.rooms.push({name: roomName, attendants: []});
    },
    getRoomList: function() {
        return this.rooms.map(function(element) {
            return element.name;
        });
    }
};