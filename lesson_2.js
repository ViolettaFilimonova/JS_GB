/*Почему код даёт именно такие результаты?
var a = 1, b = 1, c, d;
c = ++a; console.log(c);           // 2 префиксная форма, возвращает увеличенное число
d = b++; console.log(d);           // 1 постфиксная форма, увеличивает число, однако  возвращает старое значение
c = (2 + ++a); console.log(c);      // 5 во второй строчке уже есть с = а++, который равен 2,поэтому в 4 строке с = а++ равен 3 и ответ при сложении 2+3=5
d = (2 + b++); console.log(d);      // 4 в третьей строчке уже есть d = ++а, который равен 1,поэтому в 5 строке с = ++а равен 2 и ответ при сложении 2+2=4
console.log(a);                    // 3 счетчик 1+1+1
console.log(b);                    // 3 счетчик 1+1+1*/

/*2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);//4*/

/*3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
let a = 3, b = 25;
if (a >= 0 && b >= 0) {
    console.log(a - b)
} else if (a < 0 && b < 0) {
    console.log(a * b)
} else {
    console.log(a + b)
}*/

//4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
/*let a = 10;
switch (a) {
    case 0:
        console.log(a++);
    case 1:
        console.log(a++);
    case 2:
        console.log(a++);
    case 3:
        console.log(a++);
    case 4:
        console.log(a++);
    case 5:
        console.log(a++);
    case 6:
        console.log(a++);
    case 7:
        console.log(a++);
    case 8:
        console.log(a++);
    case 9:
        console.log(a++);
    case 10:
        console.log(a++);
    case 11:
        console.log(a++);
    case 12:
        console.log(a++);
    case 13:
        console.log(a++);
    case 14:
        console.log(a++);
    case 15:
        console.log(a++);
}*/
//5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
/*function sum(arg1, arg2) {
    return arg1 + arg2;

}


function subtraction(arg1, arg2) {
    return arg1 - arg2;

}


function multiplication(arg1, arg2) {
    return arg1 * arg2;

}

function division(arg1, arg2) {
    return arg1 / arg2;

}*/

/*6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов,
 operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций
  (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).*/


/*function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sum':
            return arg1 + arg2;
        case 'subtraction':
            return arg1 - arg2;
        case 'division':
            return arg1 / arg2;
        case 'multiplication':
            return arg1 * arg2;
    }
}
console.log(mathOperation(1, 2, 'multiplication'));*/

/*7. *Сравнить null и 0. Попробуйте объяснить результат.
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
Сравнения преобразуют null в число, рассматривая его как 0. Поэтому выражение (3) null >= 0 истинно, а null > 0 ложно.
С другой стороны, для нестрогого равенства == значений undefined и null действует особое правило: эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому.
 Поэтому (2) null == 0 ложно.*/

/*8. С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень. */
/*function power(val, pow) {
    if (pow == 1) {
        return val;
    } else {
        return val * power(val, pow - 1)
    }
}
console.log(power(2, 2));*/
