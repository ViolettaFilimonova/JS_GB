// var headers = document.getElementById('header');
// headers.id = 'test';//Изменили название Id

// var headers = document.getElementsByTagName('h1');
// headers[0].id = 'test';//Берем первый тег h1 и добавляем тег
// headers[0].innerText = 'Новый заголовок';//Меняем текст перого тега h1

//Тоже самое что и запись выше, только другой вариант написания
// var headers = document.getElementsByTagName('h1')[0];
// headers.id = 'test';//Берем первый тег h1 и добавляем тег
// headers.innerText = 'Новый заголовок';//Меняем текст перого тега h1
// var headers = document.getElementsByTagName('h1');
// var block = document.getElementById('block');
// for (var i = 0; i <= 10; i++) {
//     // block.innerHTML +=  "<h2>Hello!</h2>" + i;  НЕЩПТИМАЛЬНАЯ КОНСТРУКЦИЯ
//     block.insertAdjacentHTML('beforeend', '<h2> Hellow my friend, ' + i + '!</h2>');

// }
// block.insertAdjacentHTML('beforebegin', 'beforebegin');
// block.insertAdjacentHTML('afterbegin', 'afterbegin');
// block.insertAdjacentHTML('beforeend', 'beforeend');
// block.insertAdjacentHTML('afterend', 'afterend');

/*
Нужно сделать так, чтобы каждый четный заголовок был красный, а остальные синими. 
И каждый новый заголовок должен быть на 15 пиксилей больше предыдущего. 
*/
// var headers = document.getElementsByTagName('h1');
// var headers = document.querySelectorAll('h1');//указываем css селектор
// var state = [];
// for (let i = 0, size = 20; i < headers.length; i++, size += 15) {
//     if (i % 2 == 0) {
//         headers[i].style.color = 'red';
//     }else{
//         headers[i].style.color = 'blue';
//     }
    // headers[i].style.fontSize = size + 'px';
    // headers[i].id = 'title__' + i;
    // headers[i].className = 'color';
    // // headers[i].classList.add('new');
    // headers[i].classList.remove('color');
    // headers[i].classList.toggle('new');
//     headers[i].onclick = function(){
//         // lassList.contains('gray')) {
//             this.classLthis.style.color = 'grey';
//         if (!this.cist.add('gray');
//             state[i] = this.getAttribute('style');
//             this.removeAttribute('style');
//         }else{
//             this.classList.remove('grey');
//             this.style = state[i];
//         }
//     }
// }


/////////////////////////TABLE//////////////////////////////

var table = document.createElement('table');
for (let i = 1; i <= 10; i++) {
  var tr = document.createElement('tr');
  table.append(tr);
  for (let j = 1; j <= 10; j++) {
      var td = document.createElement('td');
      td.innerHTML = '<h2>' + (i * j) + '</h2>';
      tr.append(td);
  }   
    
}
document.querySelector('div').append(table);
