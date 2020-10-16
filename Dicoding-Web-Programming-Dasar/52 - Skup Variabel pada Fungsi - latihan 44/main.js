// var x;
function kuadrat()
{
    x *= x;
}
x = 5;

//Ketika belum dikuadratkan nilai x masih belum dikuadratkan
console.log('sebelum dikuadratkan: ' + x + '<br/>');
//Memanggil fungsi kuadrat
kuadrat();
//Ketika sudah dikuadratkan
console.log('setelah dikuadratkan: ' + x + '<br/>');