/*var str = 'Hello, '
str += 'world!'
console.log(str)*/

/*var list = '<ul>', i = 1;
while (i <= 10) {
    list += '<li>Элемент ' + i + '</li>';
    i++;
}
list += '</ul>';
document.write(list);*/

/*var table = '<table border = "1" width = "800">';
var tr = 1;// счетчик строк
while (tr <= 100) {
    table += '<tr>';
    var td = 1;//счетчик столбцов
    while (td <= 10) {
        if (td % 2 == 0) {
            var style = 'color:red';
        } else {
            var style = 'color:blue';
        }
        var x = tr * td;
        table += '<td style = "' + style + '">' + x + '</td>';
        td++;
    }
    table += '</tr>';
    tr++;
}
table += '</table>';
document.write(table);*/



/*1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100*/
/*let arr = [];
let num = 1;
while (num < 100) {
    num++;
    arr.push(num);
}



let a = 2;
let b = 2;
while (a < 100) {
    a += b;
    arr.splice(arr.indexOf(a), 1);
}



let c = 4;
let d = 3;
while (c < 100) {
    if (c % d === 0 && arr.indexOf(c) !== -1) {
        arr.splice(arr.indexOf(c), 1);
    } else {
        c++;
    }
}


let i = 6;
let e = 5;
while (i < 100) {
    if (i % e === 0 && arr.indexOf(i) !== -1) {
        arr.splice(arr.indexOf(i), 1);
    } else {
        i++;
    }
}
console.log(arr);*/

/*С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
 Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
 Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.*/
/*let array = [['orange', 5, 300], ['apple', 13, 120], ['potato', 2, 50]];
let i = array[1];
function countBasketPrice(products) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += (products[i][1] * products[i][2]);

    }
    return result

}
console.log(countBasketPrice(array))*/


//3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:for(…){// здесь пусто}
/*for (let i = 0; i <= 9; console.log(i++)) {

}*/


/*4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx */
/*let symbol = 'x'
for (i = 0; i < 20; i++) {
    console.log(symbol)
    symbol += 'x'
}*/



