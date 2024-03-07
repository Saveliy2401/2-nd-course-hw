console.log("задание 1")
let text = ('js');
console.log(text.toUpperCase());

console.log("задание 2")
const animals = ['Кошка', 'Кит', 'Комар', 'Носорог'];
const search = 'ко';

animals.forEach((animal) => {

    if (animal.toLowerCase().startsWith(search.toLowerCase())) {
        console.log(animal);
    }
});

console.log("задание 3");
console.log(Math.floor(32.58884));
console.log(Math.ceil(32.58884));
console.log(Math.round(32.58884));

console.log("задание 4");
const numbers = [52, 53, 49, 77, 21, 32];
const min = (values) => values.reduce((x, y) => Math.min(x, y));
const max = (values) => values.reduce((x, y) => Math.max(x, y));
console.log(min(numbers));
console.log(max(numbers));

console.log("задание 5");
function randomNumber() {
    let result = Math.round(Math.random() * 10)
    console.log(result)
}
randomNumber();

console.log("задание 6");
function randomNumbers(num) {
    const arrLength = Math.floor(num / 2);
    const result = [];
    for (let i = 0; i < arrLength; i++) {
        const randomNum = Math.floor(Math.random() * (num + 1));
        result.push(randomNum);
    }
    return result
}
console.log(randomNumbers(7));
console.log(randomNumbers(23));

console.log("задание 7");
function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

console.log(randomInteger(1, 50));

console.log("задание 8");
let myDate = new Date();
console.log(myDate)

console.log("задание 9");

let currentDate9 = new Date();

currentDate9.setDate(currentDate9.getDate() + 73);
console.log(currentDate9.toDateString());

console.log("Задание 10")
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота",
];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",
];

const ruDate = (currentDate) => {

    let date = currentDate.getDate();
    if (date < 10) (date = '0' + date);

    let month = months[currentDate.getMonth() - 1];

    let day = days[currentDate.getDay()];

    let hours = currentDate.getHours();
    if (hours < 10) { hours = '0' + hours };

    let mins = currentDate.getMinutes();
    if (mins < 10) { mins = '0' + mins };

    let secs = currentDate.getSeconds();
    if (secs < 10) { secs = '0' + secs };

    console.log(`Дата: ${date} ${month} ${currentDate.getFullYear()} - это ${day}`);
    console.log(`Время: ${hours}: ${mins}: ${secs}`);

};

ruDate(currentDate10 = new Date());

