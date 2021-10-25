function f(color){
    var title = document.getElementsByTagName('h1')[0];
    if (color == undefined) {
        color = getRandomColor();
    }
    title.style.color = color;
}

function getRandomColor(){
    var red = (Math.random() * 255).toFixed(0);
    var blue = (Math.random() * 255).toFixed(0);
    var green = (Math.random() * 255).toFixed(0);

    return 'rgb(' + red + ',' + green + ',' + blue + ')';
}


var links = document.querySelectorAll('a');
var buttons = document.querySelectorAll('button');

    for (var link of links) {
        link.onclick = f;   
    }


function f(e){
    // console.log(this);
    switch (e.target) {
        case links[0]:
            for (let i = 0; i < buttons.length; i++) {
                i % 2 == 0 ? buttons[i].classList.add('red') : buttons[i].classList.add('blue');    
            }
            break;
        case links[1]:
            for (let i = 2; i < buttons.length; i++) {
                buttons[i].remove();
            }
            break;
        case links[2]:
            for (var item of buttons) {
                item.style.color = getRandomColor();
            }
            break;
    
        default:
            break;
    }
}
////////////////////ПЕРВЫЙ ВАРИАНТ////////////////////
// for (let i = 0; i < 3; i++) {
//     buttons[i].onclick = function(e){
//         var img = document.createElement("img");//делаем  картинку
//         img.src = "p" + (e.target.id[1] - 1) + ".jpg";//связываем картинку с id по названию
//         document.body.append(img);//добавляем картинки в верстку
//     }
    
// }

////////////////////ВТОРОЙ ВАРИАНТ////////////////////

// var img = [];
// for (let i = 0; i < 3; i++) {
//     buttons[i].onclick = function(e){
//            if (img[i] == undefined) {
//                img[i] = document.createElement("img");
//                img[i].src = "p" + (e.target.id[1] - 1) + ".jpg";
//                document.body.append(img[i]);
//            }else{
//                img[i].remove();//удаляем картинку 
//                delete img[i];//удаляем картинку из массива
//            }
//         }
//     }

/////////////////////////ТРЕТИЙ ВАРИАНТ//////////////////
// for (let i = 0; i < 3; i++) {
//     buttons[i].addEventListener("click", (e) => {
  
//         img[i] = document.createElement("img");
//         img[i].src = "p" + (e.target.id[1] - 1) + ".jpg";
//         document.body.append(img[i]);
      
//     });
  
//   }
        

////////////////////////ЧЕТВЕРТЫЙ ВЫРИАНТ////////////////////
function f1(){
    console.log('Функция 1 запущена');
}

function f2(e){
    console.log('Функция 2 запущена');
    e.target.removeEventListener('click', f2);
}

buttons[0].addEventListener('click', f1);
buttons[0].addEventListener('click', f2);
