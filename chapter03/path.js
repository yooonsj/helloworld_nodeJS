/*
 * 경로 모듈
 */

 var path = require('path');

// 잘못입력된 경로를 올바르게 수정
 var normalize = path.normalize('/usr//local//bin/');
 console.log(normalize);

// 파라메터로 받은 경로들을 하나의 경로로 연결
 var join = path.join('home', 'outsider/nodejs');
 console.log(join);

 // 절대경로
var resolve = path.resolve('.');
console.log(resolve);
resolve = path.resolve('../../', 'helloworld_nodeJS');
console.log(resolve);

// 상대경로
var relative = path.relative('../../', '.');
console.log(relative);

// 디렉토리명
var currentPath = path.resolve('.');
var dirname = path.dirname(currentPath);
console.log(dirname);

// 경로의 마지막부분
var basename = path.basename('./watchFile.js');
console.log(basename);
basename = path.basename('./watchFile.js', '.js');
console.log(basename);

// 확장자
var extname = path.extname('./watchFile.js');
console.log(extname);

// 파일 존재여부
path.exists('./watchFile.js', function(exists) {
  console.log(exists);
});
path.exists('./nonExistFile', function(exists) {
  console.log(exists);
});
