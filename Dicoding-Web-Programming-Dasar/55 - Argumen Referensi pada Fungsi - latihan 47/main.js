/* Dalam hal ini sebuah fungsi juga mampu untuk melakukan operasi kepada data
yang dipassing dalam bentuk array dengan argumen referensi seperti:

var x = {key:5, yek:10};

key dan yek akan menjadi referensi bagi variabel angka dan mampu untuk dipassing
sekaligus kedalam fungsi hanya dengan satu variabel. */

function kuadrat(angka)
{
    angka.key *= angka.key;
    angka.yek *= angka.yek;
}

var x = {key:5, yek:10};

//Cara Penulisan pemanggilan adalah x['nama referensi']
console.log('sebelum dikuadratkan: ' + x['key'] + '<br/>');
console.log('sebelum dikuadratkan: ' + x['yek'] + '<br/>');
kuadrat(x);
console.log('setelah dikuadratkan: ' + x['key'] + '<br/>');
console.log('setelah dikuadratkan: ' + x['yek'] + '<br/>');