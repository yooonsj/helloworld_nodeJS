/**
 * Created by Sangjun on 2015. 7. 5..
 * 클러스터 분산 성능 테스트(클러스터 사용O)
 */

var cluster = require('cluster')
    , http = require('http')
    , numCPUs = require('os').cpus.length;

// numCPUs = 2;

if(cluster.isMaster) {
    for(var i = 0; i < numCPUs; i++) {
        var worker = cluster.fork();
    }
}else {
    http.Server(function(req, res) {
        var startTime = new Date().getMilliseconds();
        res.writeHead(200);
        for(var i = 0; i < 100000000; i++) {
        }

        var endTime = new Date().getMilliseconds();
        console.log(endTime - startTime);

        res.end('hello world\n');
    }).listen(8000);
}
