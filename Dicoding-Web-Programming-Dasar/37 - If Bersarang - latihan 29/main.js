//If Bersarang
var matematika = 20;
var wawancara = 'A';

//Jika Nilai Matematika diatas 60 maka anda lolos tes
if(matematika > 60)
{   
    var keterangan = 'Lolos tes, dengan predikat ';

    //String Keterangan dalam hal ini akan ditambahkan dengan predikat berdasarkan syarat dibawah
    if(wawancara == 'A')
    {
        keterangan += 'Memuaskan';
        console.log(keterangan);
    }
    else if(wawancara == 'B')
    {
        keterangan += 'Cukup';
        console.log(keterangan);
    }
    else
    {
        keterangan += 'Tidak lolos tes';
        console.log(keterangan);
    }
}
else
{   
    var keterangan = 'Tidak Lolos tes';
    console.log(keterangan);
}