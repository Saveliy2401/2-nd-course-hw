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



console.log("задание 2");

let num = ['1', '5', '4', '10', '0', '3'];
console.log(
    num.indexOf('4')
)


console.log("задание 3");

let union = ['1', '3', '5', '10', '20'];
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

let x = ['1', '1', '1'];
x.push(2, 2, 2);
console.log(x);


console.log("задание 6");
let z = [9, 8, 7, 'a', 6, 5];
z = z.sort();
console.log(z.pop());
console.log(z);


console.log("задание 7");

const numbers = [9, 8, 7, 6, 5];
let input = Number(prompt(`Введите число`));
if (numbers.includes(input)) {
    alert(`угадал`);
} else {
    alert(`не угадал`);
}

console.log("задание 8");

let word = 'abcdef';
word = word.split('');
word = word.reverse();
word = word.join('')
console.log(word);

console.log("задание 9");

let arr_1 = [1, 2, 3];
let arr_2 = [4, 5, 6];
let res = arr_1.concat(arr_2);
console.log(res);

console.log("задание 10");

let arr10 = [9, 8, 1, 7, 2, 6, 5, 4, 3, 10];

let sum10_1;
for (let i = 0; i < arr10.length - 1; i++) {
    console.log((sum10_1 = arr10[i] + arr10[i + 1]));
}

const sum10_2 = (a, b) => {
    let result = a + b;
    return result;
};

console.log("задание 11");

let n = [10, 20, 30];
let y = n.map(n => (n * n));
console.log(y);

console.log("задание 12");

const arr12 = ["слово", "", "слог", "длинное предложение", "буква"];

const getLengthWords = function (arr) {
    let lengthArr = arr.map(el => el.length);
    return lengthArr;
};
console.log(getLengthWords(arr12));

console.log("задание 13");

function filterPositive(array) {
    let negativeArr = [];
    for (const value of array) {
        if (value < 0) negativeArr.push(value);
    };
    return negativeArr;
}

console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));