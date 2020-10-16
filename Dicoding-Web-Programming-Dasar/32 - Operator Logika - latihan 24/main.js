console.log('X = True Y = True');

var x = true;
var y = true;

console.log('x        : ' + x + '<br/>');
console.log('y        : ' + y + '<br/>');
console.log('!x       : ' + !x + '<br/>');
console.log('!y       : ' + !y + '<br/>');
console.log('x and y  : ' + (x && y) + '<br/>');
console.log('x or y   : ' + (x || y) + '<br/>');
console.log('x xor y  : ' + Boolean(x ^ y) + '<br/>');

console.log('X = True Y = False');

var x = true;
var y = false;

console.log('x        : ' + x + '<br/>');
console.log('y        : ' + y + '<br/>');
console.log('!x       : ' + !x + '<br/>');
console.log('!y       : ' + !y + '<br/>');
console.log('x and y  : ' + (x && y) + '<br/>');
console.log('x or y   : ' + (x || y) + '<br/>');
console.log('x xor y  : ' + Boolean(x ^ y) + '<br/>');