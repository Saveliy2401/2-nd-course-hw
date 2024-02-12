//задание 1//
console.log("задание 1");

function min(a, b) {
    if (a < b) {
        return a;
    } else (a > b); {
        return b;
    }
}
let result = min(12, 45);
console.log(`${result}`);

//задание 2//
console.log("задание 2");

let n = (prompt('Введите число'));
if (n % 2 == 0) {
    console.log(`Число чётное`);
    alert('Число чётное')

} else {
    console.log(`Число нечётное`);
    alert('Число нечётное')

}


//задание 3.1//
function num(i) {
    i ** 2
}
console.log(num(10))


//задание 3.2//
function num(i) {
    return (i ** 2);
}
alert(num(10))


//задание 4//
let age = Number(prompt('Сколько вам лет?'));

if (age < 12) {
    function printMessage() {

        alert('Привет, друг!');
    }
}
else {
    function printMessage() {
        alert('Добро пожаловать!');

    }
} if (age <= 0) {
    function printMessage() {
        alert('Вы ввели неправильное значение');
    }
}
printMessage();


//задание 5//
console.log("задание 5");

let x = prompt('введите число X')
let y = prompt('введите число Y')
function abuse(x, y) {
    if (isNaN(x && y)) {
        console.log('Переданный параметр не является числом')
    } else {
        return (x * y);
    }
}
console.log(abuse(x, y));


//задание 6//
console.log("задание 6");

let enterNumber = prompt('введите число')
function messageUser(enterNumber) {
    if (isNaN(enterNumber)) {
        console.log('Переданный параметр не является числом')
    } else {
        return (enterNumber ** 3);
    }
}
console.log(messageUser(enterNumber));

//задание7//
console.log(`задание 7`);
const Pi = 3.14159;

function getCircleArea() {
    return (Pi * this.radius ** 2) / 2;
}

function getCirclePerimeter(radius) {
    return Pi * this.radius * 2;
}

const circle1 = {
    radius: 3,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

const circle2 = {
    radius: 2,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

console.log(circle1.getArea().toFixed(2));
console.log(circle1.getPerimeter().toFixed(2));

console.log(circle2.getArea().toFixed(2));
console.log(circle2.getPerimeter().toFixed(2));
