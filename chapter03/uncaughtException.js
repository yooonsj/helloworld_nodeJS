/*
 * process에 예상치 못한 에외처리 이벤트(uncaughtException)를 등록
*/
process.on('uncaughtException', function(err){
  console.log('예외 : ' + err);
});

setTimeout(function(){
  console.log('이 코드는 실행됩니다.');
}, 500);

nonExistentFunction();

console.log('이 코드는 실행되지 않습니다.');
