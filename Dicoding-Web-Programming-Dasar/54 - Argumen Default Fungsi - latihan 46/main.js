/* Dalam hal ini sebuah fungsi dapat di atur nilai argumen inputnya secara
default yaitu sepeti bahasa = 'id'. Sehingga akan secara default akan mempassing
argumen tersebut*/

function cetakPesan(nama, bahasa='id')
{
    switch(bahasa){
        case 'en':
           var pesan = 'Welcome, ' + nama;
        break;
        case 'id':
            pesan = 'Selamat datang, ' + nama;
        break;
        case 'it':
        case 'ar':
            pesan = 'Maaf Bahasa tersebut tidak tertera';
        break;
    }
    
    console.log(pesan);
}
var nama = 'Bambang';
cetakPesan(nama, 'ar');