var herbivora = new Array('kambing', 'sapi');
var karnivora = new Array('harimau', 'serigala');
var omnivora = new Array('ayam', 'monyet');

var binatang = new Array(herbivora, karnivora, omnivora);
console.log('Jumlah isi Array `binatang`: ');
console.log(binatang.length);

//Total Jumlah Array yang ada dalam Array Multidimensi
console.log('Jumlah isi Array Total: ');
console.log(binatang[0].length+binatang[1].length+binatang[2].length);