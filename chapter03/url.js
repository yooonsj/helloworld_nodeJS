/*
 * url 모듈
 */

var url = require('url');

var parseURL = url.parse('http://domain/tags/search?q=node.js&page=2&year=2015');
console.log(parseURL);

var parseQueryString = url.parse('http://domain/tags/search?q=node.js&page=2&year=2015', true);
console.log(parseQueryString);

var slashesDenoteHost = url.parse('http://domain/tags/search?q=node.js&page=2&year=2015', false, true);
console.log(slashesDenoteHost);

var format = url.format(parseURL);
console.log(format);
