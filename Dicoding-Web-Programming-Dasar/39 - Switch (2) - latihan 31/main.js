//Dalam Switch beberapa case dengan isi blok case yang sama persis dapat dituliskan seperti ini
var binatang = 'kambing';
switch(binatang)
{
    case 'ayam':
    case 'tikus':
      console.log(binatang + " termasuk hewan omnivora");
        break;
    case 'sapi':
    case 'kambing':
      console.log(binatang + " termasuk hewan herbivora");
        break;
    case 'serigala':
    case 'harimau':
      console.log(binatang + " termasuk hewan karnivora");
        break;
    default:
      console.log(binatang + " tidak terdaftar di program");
      break;
}
