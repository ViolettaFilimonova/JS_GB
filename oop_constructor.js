function Car(title, price, year){
    this.title = title;
    this.price = price;
    this.year = year;
    this.show = function(){
        console.log('Автомобиль '+ this.title + ' стоит '+ this.price);
    }
}
var car1 = new Car('BMW', 1200, 2021);
var car2 = new Car('Audi', 1000, 2022);
var car3 = new Car('VW', 900, 2019);
var cars = [car1, car2, car3];

cars.push(new Car('Shkoda', 1050, 2020));

for (var car of cars){
    car.show();//вызываем метод
}

function getCarMax(cars){
    var carMax = cars[0];//предположим, что первая машина самая дорогая
    for (let i = 1; i < cars.length; i++) {
        if (cars[i] > carMax) {
            carMax = cars[i];
        }
        return carMax;
    }
}
var auto = getCarMax(cars);
console.log('Самая дорогая машина ' + auto.title + ' , она стоит ' + auto.price);