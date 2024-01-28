//первое задание//
let password = String(prompt('Введите пароль'));
if (password === '12345') {
    alert('Верный пароль')
} else {
    alert('Не верный пароль')
}

//второе задание//
let C = Number(prompt('введите любое число'));
if (C > 0 && C < 10) {
    alert('Верно')

} else {
    alert('Неверно')
}

//третье задание//
let d = Number(prompt('введите любое число'));
let e = Number(prompt('введите любое число'));
if (d > 100 || e > 100) {
    alert('Верно')
} else {
    alert('Неверно')
}

//четвёртое задание//
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

//пятое задание//
let month = Number(prompt("Введите номер месяца:"));
switch (month) {
    case 1:
    case 2:
    case 12:
        alert('Зима');
        break;
    case 3:
    case 4:
    case 5:
        alert('Весна');
        break;
    case 6:
    case 7:
    case 8:
        alert('Лето');
        break;
    case 9:
    case 10:
    case 11:
        alert('Осень');
        break;
    default:
        alert('Нет такого месяца!');
}
