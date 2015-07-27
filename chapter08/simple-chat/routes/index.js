var express = require('express');
var Chat = require('.././chat.js');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Simple Chat' });
});

router.post('/enter', function(req, res) {
  var isSuccess = false,
      nickname = req.body.nickname;
  if (nickname && nickname.trim() !== '') {
    if (!Chat.hasUser(nickname)) {
      Chat.addUser(nickname);
    }
    req.session.nickname = nickname;
    isSuccess = true;
  }

  res.render('enter', {
    isSuccess: isSuccess,
    nickname: nickname,
    roomList: Chat.getRoomList()
  });
});

router.get('/enter', function(req, res) {
  if (req.session.nickname) {
    res.render('enter', {
      isSuccess: true,
      nickname: req.session.nickname,
      roomList: Chat.getRoomList()
    });
  } else {
    res.render('enter', {
      isSuccess: false,
      nickname: ''
    });
  }
})

router.post('/makeRoom', function(req, res) {
  var isSuccess = false,
      roomName = req.body.roomname;

  if (roomName && roomName.trim() !== '') {
    if (!Chat.hasRoom()) {
      Chat.addRoom(roomName);
      isSuccess = true;
    }
  }

  res.render('makeRoom', {
    isSuccess: isSuccess,
    roomName: roomName
  });
});

router.get('/join/:id', function(req, res) {
  var isSuccess = false,
      roomName = req.params.id;

  if (Chat.hasRoom(roomName)) {
    isSuccess = true;
  }

  res.render('room', {
    isSuccess: isSuccess,
    roomName: roomName,
    nickName: req.session.nickname,
    attendants: Chat.getAttendantsList(roomName)
  });
});

module.exports = router;
