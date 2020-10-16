// Switch

//Dalam hal ini switch dibagi menjadi case - case dan nilai variabel input akan dicek 
//dengan judul case nya


console.log('<img src="');

//var les_animaux memiliki nilai = chats
//Maka didalam switch akan dicek judul case yang memiliki nama 'chats'
var les_animaux = 'chats';
switch(les_animaux)
{
    case 'chats':
    	console.log('http://i.imgur.com/4AiXzf8.jpg');
        break;
    case 'chiens':
    	console.log('http://i.imgur.com/A8eQsll.jpg');
        break;
    case 'singes':
    	console.log('http://i.imgur.com/CXwaR8c.jpg');
        break;
    case 'les humains':
    	console.log('http://i.imgur.com/u0mFu.jpg');
        break;
}

console.log('"/>');

//Hasil adalah sebagai berikut
//<img src="http://i.imgur.com/4AiXzf8.jpg"/>

//UNTUK MENAMPILKAN MANUSIA


console.log('<img src="');

//ganti nilai variabel les_animaux
var les_animaux = 'les humains';
switch(les_animaux)
{
    case 'chats':
    	console.log('http://i.imgur.com/4AiXzf8.jpg');
        break;
    case 'chiens':
    	console.log('http://i.imgur.com/A8eQsll.jpg');
        break;
    case 'singes':
    	console.log('http://i.imgur.com/CXwaR8c.jpg');
        break;
    case 'les humains':
    	console.log('http://i.imgur.com/u0mFu.jpg');
        break;
}

console.log('"/>');

//Hasil adalah sebagai berikut
//<img src="http://i.imgur.com/u0mFu.jpg"/>