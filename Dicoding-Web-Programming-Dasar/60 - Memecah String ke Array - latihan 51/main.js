/*Script Memecah String*/

//String Awal
var url = 'codepolitan.com/interactive-coding/javascript/output';

//Memecah url menjadi array segmen
var segmen = url.split('/');
console.log(segmen);

//Join kembali segmen menjadi new_url
var new_url = segmen.join("/");
console.log(new_url);