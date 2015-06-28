/*
 * querystring 모듈
 */

var qs = require('querystring');

var parse = qs.parse('q=node.js&year=2015');
console.log(parse);
parse = qs.parse('q=node.js;year=2015', ';');
console.log(parse);
parse = qs.parse('q:node.js;year:2015', ';', ':');
console.log(parse);

var stringify = qs.stringify({q: 'node.js', some: '한글'});
console.log(stringify);
stringify = qs.stringify({q: 'node.js', some: '%%'});
console.log(stringify);
