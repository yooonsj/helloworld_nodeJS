/*
 * 네트워크 모듈
 */

var net = require('net');

var server = net.createServer();
server.on('connection', function(socket) {
  console.log('서버에 연결됐습니다.');
  socket.on('end', function() {
    console.log('연결이 종료됐습니다.');
  });

  socket.write('Hello\r\n');
  socket.on('data', function(data) {
    console.log('Recive : ' + data);
  })
});

server.listen(8124, function() {
  console.log('서버가 %d포트로 연결됐습니다.', server.address().port);
});
