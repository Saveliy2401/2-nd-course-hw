console.log('задание 1')
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
people.sort((a, b) => a.age > b.age ? 1 : -1);
console.log(people.sort());

console.log('задание 2')
function isPositive(el) {
    if (el > 0) {
        return el;
    }
}
function isMale(el) {
    if (el.gender === 'male') {
        return el;
    }
}
function filter(arr, ruleFunction) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i]))
            output.push((ruleFunction(arr[i])));
    }
    return output
}

console.log(filter([3, -4, 1, 9, 'y'], isPositive));

const people2 = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people2, isMale));

console.log('задание 3')
var now = new Date();

let timerId = setInterval(() => alert(now), 3000);

setTimeout(() => { clearInterval(timerId); alert('30 секунд прошло'); }, 30000);

console.log('задание 4')
function delayForSecond(callback) {
    setTimeout(callback, 1000);
    // Код писать можно только внутри этой функции
    callback();
}

delayForSecond(function () {
    console.log('№4 Привет, Глеб!');
})
//
console.log('задание 5')
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('№5 Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}
// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}
// Код выше менять нельзя
// Нужно изменить код ниже:
delayForSecond((cb) => sayHi(`Глеб`))
//

