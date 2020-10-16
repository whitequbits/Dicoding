/*Membuat isi string dari var pesan hanya memiliki huruf konsonan saja*/

var pesan = "saya suka baso sapi, sate kambing dan iga bakar";


/* tanda"/ ...... /g" akan merubah string "a,i,u,e,o" menjadi "" secara global*/
/* selain itu ada juga tanda"/ ...... /gi" akan merubah string "a,i,u,e,o" 
menjadi "" secara global dan case insensitive */
var hasil = pesan.replace(/a|i|u|e|o/g,"");

console.log(hasil);