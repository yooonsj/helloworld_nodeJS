/*
 * 싱글 스레드의 현재 작업 완료후 처리 할 콜백 함수 등록 
 */

process.nextTick(function() {
  console.log('nextTick으로 호출됐습니다.');
});

console.log('이 메시지가 먼저 출력됩니다.');
