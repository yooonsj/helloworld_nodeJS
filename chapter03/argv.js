/*
 * node 실행 시 입력받은 파라메터 출력
 */

process.argv.forEach(function(val, index, array) {
  console.log(index + ' : ' + val);
});
