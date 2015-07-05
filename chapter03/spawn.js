/**
 * Created by Sangjun on 2015. 7. 5..
 * 자식 프로세스 - spawn
 */

var spawn  = require('child_process').spawn
    , ls = spawn('ls', ['-l', './']);

ls.stdout.on('data', function(data) {
    console.log('stdout : ' + data);
});

ls.stderr.on('data', function(data) {
    console.log('stderr : ' + data);
});

ls.on('exit', function(code) {
    console.log('child process exited with code ' + code);
});
