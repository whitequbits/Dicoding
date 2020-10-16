var herbivora = new Array('kambing', 'sapi');
var karnivora = new Array('harimau', 'serigala');
var omnivora = new Array('ayam', 'monyet');
var binatang = new Array(herbivora, karnivora, omnivora);

// Isi Array `binatang`
console.log('Binatang: ');
console.log(binatang);

//Mengakses baris dan kolom
console.log(binatang[0][0]);
console.log(binatang[1][1]);
console.log(binatang[2][1]);

//Mengganti variabel kambing menjadi kerbau
binatang[0][0] = 'Kerbau';
console.log('Binatang: ');
console.log(binatang);