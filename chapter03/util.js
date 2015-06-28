/*
 * 유틸리티 모듈
 */

 var util = require('util');

 var str = util.format('%s의 최신 버전은 %d이다.', 'node', 0.6);
 console.log(str);
 console.log(util.isArray([]));
 console.log(util.isArray({}));
 console.log(util.isRegExp(/정규식/));
 console.log(util.isDate(new Date()));
 console.log(util.isDate('2015.06.28'));
 console.log(util.isError(new Error()));
