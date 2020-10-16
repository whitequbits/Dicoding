var warna = new Array('merah','jingga','kuning');
warna.forEach(function(value, index)
{   
    console.log('Indeks ke-' + index + ' berwarna ' + value + '<br/>');

});

warna.forEach(function(value, index)
{
    nomor = index +1;
    console.log(nomor + '.'+ ' berwarna ' + value );
});

/* Array Nama Pulau*/

var pulau = new Array('papua', 'nusa tenggara', 'maluku', 'sulawesi', 'kalimantan');
pulau.forEach(function(value, index)
{
    console.log('Index ke-' + index + ' adalah pulau ' + value);
});