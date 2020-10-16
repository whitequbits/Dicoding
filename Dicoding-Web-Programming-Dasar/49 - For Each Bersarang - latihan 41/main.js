var herbivora = new Array('kambing', 'sapi', 'kuda');
var karnivora = new Array('harimau', 'serigala', 'anjing');
var omnivora = new Array('ayam', 'monyet', 'beruang');
var binatang = new Array(herbivora, karnivora, omnivora);

  binatang.forEach(function(jenis, indexA)
  {
      jenis.forEach(function(nama, indexB)
      {
          console.log('Indeks ke -' + '[' + indexA + ']' + '[' + indexB + ']' + ' : ' + nama + '<br/>');
      });
  });
  
 