/*Script Menghapus Karakter String*/

/*Dalam Hal ini var tiap nilai dalam array herbivora
memiliki space karakter untuk menguranginya digunakan method trim*/
var herbivora = new Array('    kambing   ', '   sapi    ', '   kuda   ');

//looping untuk memunculkan nilai array herbivora dan length
for(i=0;i<3;i++){
    console.log(herbivora[i]);
    console.log(herbivora[i].length);
}

//looping untuk memunculkan nilai yang telah ditrim dan lengthnya
herbivora.forEach(function(nama,index){
    nama = nama.trim();
	
    console.log(nama);
    console.log(nama.length);
})