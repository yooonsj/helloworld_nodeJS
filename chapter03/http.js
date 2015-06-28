/*
 * http 모듈
 */

var http = require('http');

var server = http.createServer();
server.on('connection', function(socket) {
  socket.write('Hello Http Server');
});

server.listen(8125, 'localhost');
console.log('http 서버가 연결됐습니다.');
