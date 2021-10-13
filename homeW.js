// let basket = [
//     {
//         title: "апельсины",
//         price: 130,
//         count: 3
//     },
//     {
//         title: "яблоки",
//         price: 80,
//         count: 1
//     },
//     {
//         title:"бананы",
//         price: 60,
//         count: 5
//     }
// ];

// function products(mas){
//     var sumBasket = 0;
//     for (i of mas){
//         sumBasket = sumBasket + (i.price * i.count);
//     }
//     return sumBasket;
// }

// console.log(products(basket));


// Игра быки и коровы
var number = [];//4 цыфры числа помещаем в массив
var attems = 0; // число попыток
guessNumber();
function generateNumber(){
    var min = 1, max = 9;//максимальное и минимальное число 
    for (let i = 0; i < 4; i++){//заполняем числами массив
        var part = Math.round(Math.random() * (max-min) + min);
    }
}
function guessNumber(){
    var result = prompt('Введите число (-1 -закончить игру)');
    var gameIsRunning = true;//проверка на то что игра идет
    //проверка на то идет ли игра
    while(gameIsRunning){
        if (result == -1){
            gameIsRunning = false;
        }else if (parseInt(result) == 0 || isNaN(parseInt(result))){//игрок ввел некорректные данные
        alert('Вы не ввели число')
        //делаем ее один запрос
        result = prompt('Введите число (-1 -закончить игру)');
    }else if (result != 4){
        alert('Вы ввели некорректное число')
        result = prompt('Введите число (-1 -закончить игру)');
    }//проверяем числа
    else{
        var answer = checkNumber(result);
        if(answer[0] == true){
            //число угадано
            alert('Поздравляю! Вы угадали число. Кол-во попыток' + attems);
            //останавлиаем игру
            gameIsRunning = false;
        }else{
            //следующий ход
            result = prompt('Быки: ' + answer[1] + ' Коровы: ' + answer[2] + ' Введите число (-1 -закончить игру)');
        }
    }

    }
}

function checkNumber(myresult){
    attems++;//каждая проверка увиличивает количество попыток
    // массив результата
    // 0 - общий результат
    // 1 - быки
    // 2 - коровы
    var answer = [false, 0, 0];
    console.log(myresult);
    console.log(number);
}

for(let i = 0; i < myresult.lenght; i++){
    if(number[i] == parseInt(myresult[i])){// если число совпадает по индексу то это бык
        answer[1]++;
    }else if(number.indexOf(parseInt(myresult[i])!=1)){//если число есть в массиве то это корова
        answer[2]++;
    }else{

    }


    if (answer[i] == 4){
        answer[0] = true;
        }
    return answer;
}