/**
 * Created by Sangjun on 2015. 7. 5..
 * 자식 프로세스 - exec
 */

var exec = require('child_process').exec;

exec('cat *.js bad_file | wc -l',
    function(error, stdout, stderr) {
        console.log('stdout : ' + stdout);
        console.log('stderr : ' + stderr);
        if(error !== null) {
            console.log('exec error : ' + error);
        }
    }
);