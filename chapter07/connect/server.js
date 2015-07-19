/**
 * Created by Sangjun on 2015. 7. 19..
 */

var http = require('http')
    , fs = require('fs')
    , path = require('path')
    , io = require('socket.io');

var server = http.createServer(function(req, res) {
    var filename = path.join(process.cwd(), req.url);

    path.exists(filename, function(exists) {
        if (!exists) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write('404 Not Fount\n');
            res.send();
            return;
        }

        fs.readFile('./index.html'
            , encoding='utf-8'
            , function(err, data) {
                if (err) {
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    res.write(err + '\n');
                    res.end();
                    return;
                }
                res.writeHead(200, {
                    'Content-type': 'text/html; charset=utf-8'
                });
                res.end(data);
            }
        );
    });
});

server.listen(3000);
io = io.listen(server);

io.sockets.on('connection', function(socket) {
    console.log('connected');

    socket.on('disconnect', function() {
        console.log('Good-bye');
    });
});

console.log('서버가 시작됐습니다. http://localhost:3000');
