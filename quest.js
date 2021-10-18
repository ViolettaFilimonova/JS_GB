var answer, ok;

do{
    ok = false;
    answer = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');

    if (answer == -1) {
        break;
    }else{
        ok = isAnswer(works.a0, answer);
    }
}while (!ok);

switch (answer) {
    case 1://Первое действие, если в 1 окне ввели 1, то прерходим на 2 окно
        do {
            ok = false;
            answer = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (answer == -1) {
                break;
            }else{
                ok = isAnswer(works.b0, answer);
            }
        } while (!ok);
        switch (answer) {
            case 1://Второе действие, если во 2 окне ввели 1, то прерходим на 4 окно
                do {
                    ok = false;
                    answer = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (answer == -1) {
                        break;
                    }else{
                        ok = isAnswer(works.d0, answer);
                    }
                } while (!ok);
                break;

                case 2://Если ввели 2 то также переходим на 4 окно
                do{
                    ok = false;
                    answer = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (answer == -1) {
                        break;
                    }else{
                        ok = isAnswer(works.d0, answer);
                    }
                } while (!ok);
                break;
                case -1://Второе действие
                    break;
                default:
                    alert('Ошибка');
                }
                break;
                case -1://Первое действие
                break;
                default:
                    alert('Ошибка');
            }
            alert('Спасибо за игру');
            
        
switch (answer) {
    case 2:
        do {
            ok = false;
            answer = +prompt(works.с00 + works.с1 + works.с2 + '-1 - Выход из игры');
            if (answer == -1) {
                break;
            }else{
                ok = isAnswer(works.b0, answer);
            }
        } while (!ok);
        break;

    default:
        break;
}




    function isAnswer(optionAnswer, answer){
        if (isNaN(answer) || !isFinite(answer)) {
            alert('Вы ввели не число!');
            return false;
        }else if(answer < 1 || answer > optionAnswer){
            alert('Ваше число выходит из допустимого диапозона');
            return false;
        }
        return true;
    }