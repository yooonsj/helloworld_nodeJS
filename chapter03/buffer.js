/*
 * 문자열 버퍼(인코딩 지정)
 */

var buf1 = new Buffer(256);
var len1 = buf1.write('\u00bd + \u00bc = \u00be', 0);
console.log(len1 + 'byte : ' + buf1.toString('utf8', 0, len1));

var str = 'node.js';
var buf2 = new Buffer(str.length);
for(var i = 0; i < str.length; i++) {
  buf2[i] = str.charCodeAt(i);
}

console.log(buf2.toString());
console.log(Buffer.isBuffer(buf2));
console.log(buf2.length);
