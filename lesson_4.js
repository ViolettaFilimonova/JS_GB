/*1. Написать функцию, преобразующую число в объект.
Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
в котором в соответствующих свойствах описаны единицы, десятки и сотни.
Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.*/


/*let num = parseInt(prompt('Введите число от 0 до 999'));
let obj = {};


function filterNum(num) {
    if (num > 0 && num < 1000) {
        obj.ed = num % 10;
        obj.dec = Math.floor(num / 10 % 10);
        obj.hun = Math.floor(num / 100);
        return obj;

    }
    else {
        alert('Введите число от 0 до 999');
    }
}
filterNum(num);
console.log(obj);*/

/*
var record = [];

function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}

function answer(arg1, arg2, arg3) {
    var ok = false;
    do {
        event = +prompt(arg1 + arg2 + arg3 + "-1 - Выход из игры");
        if (event == -1) {
            return -1;
            break;
        } else {
            ok = isAnswer(works.a0, event);
        }
    } while (!ok);
    switch (event) {
        case 1:
            record.push([arg1, arg2]);
            break;
        case 2:
            record.push([arg1, arg3]);
            break;
        case 1:
            record.push([arg1, "Вы вышли из игры"]);
            break;
    }
    return event;
}

switch (answer(works.a00, works.a1, works.a2)) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        switch (answer(works.b00, works.b1, works.b2)) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
            case 2: // если ввели 2 то тоже переходим на окно 4
                answer(works.d00, works.d1, works.d2);
                break;
            case -1: // Второе действие
                break;
            default:
                alert("Ошибка");
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        switch (answer(works.c00, works.c1, works.c2)) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
            case 2: // если ввели 2 то тоже переходим на окно 4
                answer(works.d00, works.d1, works.d2);
                break;
            case -1: // второе действие
                break;
            default:
                alert("Ошибка");
        }
        break;
    case -1: // первое действие
        break;
    default:
        alert("Ошибка");
}

alert("Спасибо за игру");
console.log(record);
var step = +prompt("Введите номер хода");
console.log(step);
var stepHistory = "В ходе № " + step + " " + record[step - 1][0] + "Ваш выбор " + record[step - 1][1];
alert(stepHistory);*/