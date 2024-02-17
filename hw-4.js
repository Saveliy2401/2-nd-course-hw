//задание 1//
let x = 1;
while (x <= 2) {
    console.log('привет')
    x++;
}

//задание 2//
function nums(i) {
    console.log(i)
}

let i = 1;
while (i <= 5) {
    nums(i)
    i++
};

//задание 3//
function nums(i) {
    console.log(i)
}

let b = 7;
while (b <= 22) {
    nums(b)
    b++
};

//задание 4//
let obj = { 'Николай': 200, 'Василий': 300, 'Пётр': 400 };

for (key in obj) {
    document.write([key] + ' - Зарплата ' + obj[key] + ' долларов' + '<br>');
}

//задание 5//
for (let n = 1000, num = 0; n > 50; num++) {

    n /= 2;
    alert(n);
}
//задание 6//
let k = Number(prompt('какая дата у первой пятницы месяца?'));
let friday = k;
do {
    alert(`сегодня пятница ${friday}-е число. Необходимо подготовить отчёт.`);
    friday = friday + 7;
    friday++;
} while (friday <= 31);
