// fungsi untuk menghitung luas lingkaran
function luasLingkaran(a, cek = 'true'){
    // var a akan menjadi diameter jika cek = true
    // var a akan menjadi radius jika cek = false
    switch(cek){
        case 'true':
            luas = (3.14*a*a)/4;
        break;
        case 'false':
            luas = (3.14*a*a);
        break;
    }
    return luas;
}

// menghitung luas berdasarkan diameter
var diameter = 14;
var luas = luasLingkaran(diameter);
console.log('luas berdasarkan diameter: ' + luas +'<br/>');

// menghitung luas berdasarkan jari-jari
var radius = 7;
var luas = luasLingkaran(radius, false);
console.log('luas berdasarkan radius: ' + luas +'<br/>');