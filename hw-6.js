console.log("задание 1");

const array = [1, 5, 4, 10, 0, 3];
let i = 0;
while (i < array.length) {
    if (i === 10) {
        break
    }
    console.log(array[i]);
    i++
}
//я не понимаю как изменить



console.log("задание 2");

let num = [1, 5, 4, 0, 0, 3];
console.log(
    num.indexOf('4')
)


console.log("задание 3");

let union = [1, 3, 5, 10, 20];
union = union.join(' ');
console.log(union);


console.log("задание 4");

let arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = new Array;
    for (let j = 0; j < 3; j++) {
        arr[i][j] = 1;
    }
}
console.log(arr);


console.log("задание 5");

let x = [1, 1, 1];
x.push(2, 2, 2);
console.log(x);


console.log("задание 6");
let z = [9, 8, 7, 'a', 6, 5];
z_2 = z.sort();

console.log(z_2);


console.log("задание 7");

const numbers = [9, 8, 7, 6, 5];
let input = Number(prompt(`Введите число`));
if (numbers.includes(input)) {
    alert(`угадал`);
} else {
    alert(`не угадал`);
} if (input === null) {
    console.log(`ничего не выбрано`)
}


console.log("задание 8");

let word = 'abcdef';
word = word.split('');
word = word.reverse();
word = word.join('')
console.log(word);

console.log("задание 9");
let arr_1 = [[1, 2, 3], [4, 5, 6]]
let res = arr_1.flat();
console.log(res);

console.log("задание 10");

let arr10 = [9, 8, 1, 7, 2, 6, 5, 4, 3, 10];

let sum10_1;
for (let i = 0; i < arr10.length - 1; i++) {
    (sum10_1 = arr10[i] + arr10[i + 1])
    console.log(sum10_1);
}



console.log("задание 11");
function kvadrat() {
    var input = prompt("Введите элементы массива через запятую");
    n = input.split(",");
    let y = n.map(n => (n * n));
    console.log(y);
}
kvadrat()

console.log("задание 12");

const arr12 = ["слово", "", "слог", "длинное предложение", "буква"];

const getLengthWords = function (arr) {
    let lengthArr = arr.map(el => el.length);
    return lengthArr;
};
console.log(getLengthWords(arr12));

console.log("задание 13");

function filterPositive(array) {
    let nigativeArr = [];
    for (const value of array) {
        if (value < 0) nigativeArr.push(value);
    };
    return nigativeArr;
}

console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));
//здесь тоже не понимаю. я пытался, честно