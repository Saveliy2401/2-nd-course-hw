//первое задание//
let a = 10;
alert(a);
a = 20;
alert(a);

//второе задание//
let firstIphone = 2007;
alert(`Год выпуска первого айфона ${firstIphone}`);

//третье задание//
let bestJsMan = "Брендан Эйх";
alert(`${bestJsMan}-создатель Js`);

//четвертое задание//
let d = 10;
let e = 2;
alert(
    `Сумма ${d + e}\nРазность ${d - e}\nПроизведение ${d * e}\nЧастное ${d / e}`
);

//пятое задание//
let f = 2;
let j = 5;
alert(`Возводим в степень ${f ** j}`);

//Шестое задание//
a = 9;
b = 2;
alert(`Находим остаток от деления ${a / b}`);

//седьмое задание//
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//восьмое задание//
let age = Number(prompt("Сколько Вам лет?"));
alert(age);

//задания 9-9.4//
let user = {
    name: "Савелий Галактионов",
    age: 27,
    isAdmin: true
}
user["city of residence"] = "Владивосток";
user.age = 31;
delete user["city of residence"];
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info])

/*задание 10*/
let names = (prompt("Привет,друже. Как тебя зовут?"));
let greeting = `Привет ${names}!`;
alert(greeting);


