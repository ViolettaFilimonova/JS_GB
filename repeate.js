// let a = +prompt('Введите число от 1 до 15');

// function change(a){
//     if (a == 15) {
//         document.write(a);
//     }else{
//         document.write(a + ' ');
//         change(a + 1);
//     }
// }
// change(a);

// var list = "<ul>", i = 1;

// while(i <= 10) {
//     list += "<li>Номер:" + i + "</li>";
//     i++;
// }
// list += "</ul>";

// document.write(list);

// var text = 'Hello'
// text += ', world!'
// document.write(text)


// var table = '<table width="800", border="3">';
// var tr = 1;

// while(tr <= 100){
//     table += '<tr>';
//     var td = 1;
//     while(td <= 10){
//         if(td % 2 == 0){
//             var style = 'color:pink;';
//         }else{
//             var style = 'color:blue;';
//         }
//         var x = tr * td;
//         table += '<td style="'+style+'">' + x + '</td>';
//         td++;
//     }
//     table += '</tr>';
//     tr++;
// }
// table += '</table>';

// document.write(table);
 

// var arr = [
//     {
//         title: 'Товар 1',
//         price: 300,
//         count: 1
//     },
//     {
//         title: 'Товар 2',
//         price: 200,
//         count: 2
//     },
//     {
//         title: 'Товар 3',
//         price: 986,
//         count: 3
//     }
// ]
// var sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i].price * arr[i].count;
//     document.write(arr[i].title + ' стоит: ' + arr[i].price + ', ');
// }
// document.write('Сумма всех товаров: ' + sum);

// for (let i = 0; i <= 9; console.log(i++)) {
    
// }
// let x = 'x';
// let str = 0;
// for (let i = 0; i < 21; i++) {
//     str[i]
//     document.write(x + '<br>');
//     x += 'x';
// }

// var x = 1;

// function natureNum(num) {
//     var i = 2;
//     while (i < num) {
//         if (num % i == 0) {
//             return false
//         }
//         i++;
//     }
//     return true;
// }

// while (x < 101) {
//     if (natureNum(x)) {
//         console.log(x);
//     }
//     x++;
// }


// let number = [];//четыре цифры нашего числа
// let attemps = 0; // число попыток

// generateNumber(); //сгенерировали непторяющиеся значения массива
// guessNumber();

// function generateNumber() {
//     for (let i = 0; i < 4; i++) {
//         let randomNum = Math.round(Math.random() * (9 - 1) + 1);
        
//         if (i == 0) {
//             number[0] = randomNum;
//         }else{
//             while (number.indexOf(randomNum) != -1) {
//                 randomNum = Math.round(Math.random() * (9 - 1) + 1);
//             }
//             number[i] = randomNum;
//         }  
//     }
    
// }


// function guessNumber() {
//     let gamerAnswer = prompt('Введите 4ех значное число, если хотите выйти из игры, введите -1');
//     let gamePlay = true;
    
//     while (gamePlay) {
//         if (gamerAnswer == -1) {
//             gamePlay = false;
//         }else if (gamerAnswer.length != 4 || isNaN(parseInt(gamerAnswer))) {
//             gamerAnswer = prompt('Введите 4ех значное число!');  
//         }else{
//             let answer = checkNumber(gamerAnswer);
//             if (answer[0] == true) {
//                 alert('Вы выйграли!' + attemps);
//                 gamePlay = false;
//             }else{
//                 gamerAnswer = prompt('Быки: ' + answer[1] + '   Коровы: ' + answer[2] + ', если хотите выйти из игры, введите -1');
//             }
            
//         }
//     }
// }

// function checkNumber(user) {
//     attemps++;
//     let answer = [false, 0, 0];


//     console.log(number);
//     console.log(user)

//     for (let i = 0; i < user.length; i++) {
//         if (number[i] == parseInt(user[i])) {
//             answer[1]++;
//         }else if(number.indexOf(parseInt(user[i])) != -1) {
//             answer[2]++;
//         }
        
//     }

//     if (answer[1] == 4) {
//         alert('Вы выйграли!' + attemps);
//         answer[0] = true;
//     }    
//     return answer
// }
// checkNumber();

// let test = {}
// function objNum(num) {//123
    
//     if (num > 999 || num < 0 || isNaN(num)) {
//         console.log('введите число от 0 до 999' + test)
//     }else {
//        test.units = num % 10//3
//        test.dozens = Math.floor(num / 10 % 10)
//        test.hundreds = Math.floor(num / 100) 
       
//     }
// }

// objNum(1);
// console.log(test)

// let gamer, ok
// let saveAnsver = [];

// questGame(quest.a00, quest.a01, quest.a02, quest.a0);


// switch (gamer) {
//     case 1:
//         questGame(quest.b00, quest.b01, quest.b02, quest.b0);
//         switch (gamer) {
//             case 1:
//                 questGame(quest.d00, quest.d01, quest.d02, quest.d0);
//         }
//         switch (gamer) {
//             case 2:
//                 questGame(quest.e00, quest.e01, quest.e02, quest.e0);
//         } 
//     case 2:
//         questGame(quest.c00, quest.c01, quest.c02, quest.c0); 
//         switch (gamer) {
//             case 1:
//                 questGame(quest.e00, quest.e01, quest.e02, quest.e0);
//         }
//         switch (gamer) {
//             case 2:
//                 questGame(quest.e00, quest.e01, quest.e02, quest.e0);
//         } 
              
// }

// function questGame(text, firstV, secondV, q) {
//     do {
//         ok = false
//         gamer = +prompt(text + firstV + secondV + ' Для выхода из игры введи -1')
    
//         if (gamer == -1){
//             break
//         }else{
//             ok = isAnswer(q, gamer)
//         }
//     } while (!ok);
//     switch (gamer) {
//         case 1:
//             saveAnsver.push([text, firstV]);
//             break;
//         case 2:
//             saveAnsver.push([text, secondV]);
//         case -1:
//             saveAnsver.push([text, 'Вы вышли из игры!']);
//     }
//     return gamer
// }

// function isAnswer(q , gamer) {
//     if (gamer > q || gamer < 1) {
//         alert('Введите корректный вариант ответа')
//         return false
//     }else if (isNaN(gamer) || !isFinite(gamer)) {
//         alert('Введите чмсло')
//         return false
//     }
//     return true
// }

// console.log(saveAnsver)
// let quationGamer = prompt('Ответ на какой ввод входа вы бы хотели посмотреть?')
// console.log(quationGamer)
// let stepHistory = 'В ходе номер ' + quationGamer + ' ' + saveAnsver[quationGamer - 1][0] + saveAnsver[quationGamer - 1][1];
// alert(stepHistory)
// let obj = {
//     name : 'Violetta',
//     id : 10,
//     age : 22
// }
// objF(obj);
// function objF(params) {
//     let newObj = Object.entries(obj);
//     console.log(newObj)
// }

// let block = document.getElementById('block');
//  block.innerHTML += '<h2> Dear </h2>'

// for (let i = 0; i < 15; i++) {
//     // block.insertAdjacentHTML('beforeend')= '<h2> friends number: ' + i + '</h2>' //неоптимальный код
//     block.insertAdjacentHTML('beforeend', '<h2> friends number: ' + i + '</h2>' ) //оптимальный код
    
// }

// let headers = document.querySelectorAll('h2');
// let state = [];


// for (let i = 0,size = 20; i < headers.length; i++, size+=15) {
//     headers[i].style.fontSize = size + 'px'
//     if (i % 2 == 0) {
//         headers[i].style.color = 'blue'
//     }else{
//         headers[i].style.color = 'red'
//     }
//     headers[i].onclick = function() {
//         if (!this.classList.contains('grey')){
//             this.classList.add('grey')
//             state[i] = this.getAttribute('style')
//             this.removeAttribute('style')
//         }else{
//             this.classList.remove('grey')
//             this.style = state[i]
//         }
//     }


    // heders[i].id = 'id_title_' + i;
    // heders[i].className = 'class_title_' + i;
    // heders[i].classList.add('newClass');
    // heders[i].classList.remove('newClass');
    // heders[i].classList.toggle('newClass');
    // }
    // var a = document.createElement('a')
    // a.href = 'http://google.com'
    // a.innerText = 'google'
    // document.body.append(a)

    // var table = document.createElement('table')
    


    //  for (let i = 1; i < 11; i++) {
    //     var tr = document.createElement('tr')
    //     table.append(tr)

    //     for (let j = 1; j < 11; j++) {
    //         var td = document.createElement('td')
    //         td.innerHTML = '<h2>' + j * i + '</h2>'
    //         tr.append(td)
            
    //     }
    // }
    // document.querySelector('div').append(table)

/////////////////////////CHESS START///////////////////////////////
    // var letters = [' ','A','B','C','D','E','F','G','H',' '];
    // var numbers = [' ','8','7','6','5','4','3','2','1',' '];

    // black1 = [ '8','&#9820;','&#9822;','&#9821;','&#9819;','&#9818;','&#9821;','&#9822;','&#9820;','8' ];
    // white1 = [ '1','&#9814;','&#9816;','&#9815;','&#9813;','&#9812;','&#9815;','&#9816;','&#9814;','1' ];
    // black2 = [ '7','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','7' ];
    // white2 = [ '2','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','2' ];

    // var table = document.createElement('table')

    //  for (let i = 0; i < 10; i++) {
    //     var tr = document.createElement('tr')

    //     table.append(tr)

    //     for (let j = 0; j < 10; j++) {
    //         var td = document.createElement('td')
    //         if (j % 2 == 0 && i % 2 == 0 ) {
    //             td.className = 'beige'
    //         }else if (j % 2 != 0 && i % 2 != 0 ) {
    //             td.className = 'beige'
    //         }else{
    //             td.className = 'gray'
            
    //         }

    //         if (i == 0 ) {
    //             td.style.backgroundColor = 'white'
                
    //             td.innerText = letters[j];
    //             td.className = 'rotate'
    //         }else if(i == 9){
    //             td.style.backgroundColor = 'white'
                
    //             td.innerText = letters[j]
    //         }else if(j == 0){
    //             td.className = 'white'
                
    //             td.innerText = numbers[i]
    //         }else if(j == 9){
    //             td.className = 'white'
                
    //             td.innerText = numbers[i]
    //             td.classList.add('rotate')
    //         }else if (i == 1) {
    //             td.innerHTML = black1[j]
    //             td.classList.add('rotate')
    //         }else if (i == 2) {
    //             td.innerHTML = black2[j]
    //             td.classList.add('rotate')
    //         }else if (i == 8) {
    //             td.innerHTML = white1[j]
    //         }else if (i == 7) {
    //             td.innerHTML = white2[j]
                
    //         }
    //         tr.append(td)
            
    //     }
    // }

    // document.querySelector('div').append(table)

    /////////////////////////CHESS END///////////////////////////////

                



    // var button = document.getElementsByTagName('button')[0];

    // var text = document.querySelector('h2');
    // var sel = document.querySelector('select');
    // var arr = []
    
    
    // function randomColor() {
    //     var red = (Math.random() * 255).toFixed(0)
    //     var green = (Math.random() * 255).toFixed(0)
    //     var blue = (Math.random() * 255).toFixed(0)
    
    //     return 'rgb(' + red + ',' + green + ',' + blue + ')'
    // }
   


    
    // function f(color) {
        
       
    //     // window.redButton = !Boolean(window.redButton);
    //     // text.style.color = window.redButton ? '#f00' : '#000';

    //     // document.querySelector('h2')
    //     // .style.color = '#f00';
    //     // window.button = !Boolean(window.button)


    //     if (color == undefined){
    //         color = randomColor() ;
    //     }
    //     text.style.color = color
    // }




// var links = document.querySelectorAll('a');
// var buttons = document.querySelectorAll('button');
// for (var link of links) {
//     link.onclick = f;
    
// }
// function f(e) {
//     // console.log(e.target)
    
//     switch (e.target) {
//         case links[0]:
//             for (let i = 0; i < buttons.length; i++) {
//                 i % 2 == 0 ? buttons[i].classList.add('red') : buttons[i].classList.add('blue');  
//             }
//             break;
//             case links[1]:
//             for (let i = 2; i < buttons.length; i++) {
//                 buttons[i].remove();
//             }
//             break;
//             case links[2]:
//             for (let item of buttons) {
//                 item.style.color = randomColor()
//             }
//             break;
    
//     }
// }
// var img = []
// var buttons = document.querySelectorAll('button')

    // for (let i = 0; i < buttons.length; i++) {
    //     buttons[i].onclick = function (e) {
    //         if (img[i] == undefined) {
    //             img[i] = document.createElement('img')
    //             img[i].src = 'p' + (e.target.id[1]) + '.jpg'
    //             document.body.append(img[i])
    //         }else{
    //             img[i].remove()
    //             delete img[i]
    //         }
    //     }
        
        
    // }

    
// function f1() {
//     console.log('started function 1')
// }
// function f2(e) {
//     console.log('started function 2')
//     e.target.removeEventListener('click', f2)
// }
// buttons[0].addEventListener('click', f1)
// buttons[0].addEventListener('click', f2)

// var img = []
// var buttons = document.querySelectorAll('button')

//     for (let i = 0; i < buttons.length; i++) {
//         buttons[i].onclick = function (e) {
//             if (img[i] == undefined) {
//                 img[i] = document.createElement('img')
//                 img[i].src = 'p' + (e.target.id[1]) + '.jpg'
//                 document.body.append(img[i])
//             }else{
//                 img[i].remove()
//                 delete img[i]
//             }
//         }
        
        
   // }


//                              SLIDER START

// var offset = 0; //движение влево
// var sliderItems = document.querySelector('.slider__items');

// document.querySelector('.slider_next').addEventListener('click', function() {
//    offset += 300 ;
//    if (offset > 1200) {
//        offset = 0
//    }
//    sliderItems.style.left = -offset + 'px';
// })

// document.querySelector('.slider_prev').addEventListener('click', function() {
//     offset -= 300 ;
//     if (offset < 0 ) {
//         offset = 1200
//     }
//     sliderItems.style.left = -offset + 'px';
//  })

// const images = document.querySelectorAll('.slider .slider__item img')
// const sliderItem = document.querySelector('.slider__item')
// let count = 0
// let width;

// function f() {
//     console.log('resize')
//     width = document.querySelector('.slider').offsetWidth;
//     sliderItem.style.width = width * images.length + 'px' 
//     images.forEach(item => {
//         item.style.width = width + 'px'
//         item.style.height = 'auto'
//     })
// }
// window.addEventListener('resize', f)
// f();

// document.querySelector('.slider_next').addEventListener('click', function() {
//     count++
//     rollSlider();
// });

// function rollSlider() {
//     sliderItem.style.transform = 'translate(-' + count * width + 'px)'
// }



 /* конфигурация */
//  let width = 130; // ширина картинки
//  let count = 3; // видимое количество изображений

//  let list = document.querySelector('ul');
//  let listElems = document.querySelectorAll('li');

//  let position = 0; // положение ленты прокрутки

//  document.querySelector('.prev').onclick = function() {
//    // сдвиг влево
//    position += width * count;
//    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
//    position = Math.min(position, 0)
//    list.style.marginLeft = position + 'px';
//  };

//  document.querySelector('.next').onclick = function() {
//    // сдвиг вправо
//    position -= width * count;
//    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
//    position = Math.max(position, -width * (listElems.length - count));
//    list.style.marginLeft = position + 'px';
//  };
//                              SLIDER END


