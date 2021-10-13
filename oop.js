var car = {
    title: 'Audi',
    price: 1000,
    color: 'white',
    isEngineStarted:false,
    show: function(){
        console.log('Автомобиль '+ this.title + ' стоит '+ this.price);
    }

}
car.show();



var car2 = {
    title: 'BMW',
    price: 1200,
    color: 'black',
    isEngineStarted:false
}
car2.info = car.show;
car2.info();

car.stop = function(){
    if(this.isEngineStarted){
        this.isEngineStarted = false;
        console.log('Автомобиль ' + this.title + ' выключен!')
    }
}
car2.stop = car.stop;


// car.year = 2021;//примитивные свойства
// console.log(car);

//если функцию присвоить свойству объекта, то она станет методом
car.start = startEngine;//при присваивании функции нельзя ставить скобки , так как они моментально запускают функцию
car.start();//запускаем
car2.start = startEngine;
car2.start ();
car2.stop();
car.stop();

function startEngine(){
    //console.log(this);//this - передает объект car, car2(кто запустил, тот и this)
    if(!this.isEngineStarted){
        this.isEngineStarted = true;
        console.log('Автомобиль ' + this.title + ' запущен!');
    }
}