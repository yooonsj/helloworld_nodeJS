/*
 * 파일을 읽은 후 이벤트를 발생시키지만 콜백 함수를 처리해야 할 스레드가 무한루프에 빠짐
 * 무한루프에 빠져 콜백함수를 호출하지 못함
 */

var fs = require('fs');

fs.readFile('./test.txt', encoding='utf-8', function(err, data){
	if(err) {
		throw err;
	}

	console.log(data);
});

console.log('파일의 내용 : ');

while(true) {}
