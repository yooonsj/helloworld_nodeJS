/*
 * process에 종료 이벤트(exit)를 등록
*/

process.on('exit', function(){
  console.log('Good Bye');
});
