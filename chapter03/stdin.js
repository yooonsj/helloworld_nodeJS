/*
 * process가 제공하는 표준 입력, 출력 함수(stdin, stdout)
*/

process.stdin.resume();
process.stdin.setEncoding('utf-8');

process.stdin.on('data', function(chunk) {
  process.stdout.write('data : '+ chunk);
});

process.stdin.on('end', function() {
  process.stdout.write('end');
})
