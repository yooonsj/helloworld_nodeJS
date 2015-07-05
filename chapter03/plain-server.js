/**
 * Created by Sangjun on 2015. 7. 5..
 * 클러스터 분산 성능 테스트(클러스터 사용 X)
 */

var http = require('http');

http.Server(function(req, res) {
    var startTime = new Date().getMilliseconds();
    res.writeHead(200);
    for(var i = 0; i < 1000000000; i++) {
    }

    var endTime = new Date().getMilliseconds();
    console.log(endTime - startTime);
    res.end('hello world\n');
}).listen(8000);