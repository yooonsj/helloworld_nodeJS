/*
 * fs모듈 : 파일시스템과 관련된 함수를 제공
 */

var fs = require('fs');

fs.readFile('./test.txt', encoding='utf-8', function(err, data){
	if(err) {
		throw err;
	}

	console.log(data);
});

console.log('파일의 내용 : ');
