/*
 * 파일시스템 파일명 변경
 */

var fs = require('fs');

fs.rename('./test.txt', './demo.txt', function(err) {
  if(err) throw err;

  console.log('수정됐습니다.');
});
