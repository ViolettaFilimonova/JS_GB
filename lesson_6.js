// window.onload = function(){//при загрузке всех тегов страницы запускается функция 
//     var images = document.getElementsByTagName('img');//массив картинок
//     for(var i = 0; i < images.length; i++){
//         images[i].onclick = showBigPicture;
//     }
// }

// function showBigPicture(event){
//     var bigPictureBlock = document.getElementById('bigPicture');
//     bigPictureBlock.innerHTML = '';
//     var smallPicture = event.target;//картинка по которой кликнули

//     var path = 'big/' + smallPicture.id.split('_')[1] + '.jpg';
//     var bigPicture = document.createElement('img');
//     bigPicture.src = path;
//     bigPictureBlock.append(bigPicture);
//     bigPicture.onerror = function(){
//         alert('file not found');
//     }

// }