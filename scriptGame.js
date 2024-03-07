function startGameWeather() {
    let quo = Number(prompt("Введите число"));
    const Season = (month) => {
        if (month === 12 || month === 1 || month === 2) {
            return "Зима";
        } else if (month >= 3 && month <= 5) {
            return "Весна";
        } else if (month >= 6 && month <= 8) {
            return "Лето";
        } else if (month >= 9 && month <= 11) {
            return "Осень";
        } else {
            return "Неправильный номер месяца";
        }
    };

    let ans = Season(quo);
    alert(ans);
};

function gameFruties() {
    const words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    const shuffle = (array) => array.sort(() => Math.random() - 0.5)
    alert(shuffle(words));

    let answer1 = String(prompt("Введите первое слово"));

    let answer2 = String(prompt("Введите второе слово"));

    if (answer1.toLocaleLowerCase().trim() === words[0].toLocaleLowerCase() &&
        answer2.toLocaleLowerCase().trim() === words[words.length - 1].toLocaleLowerCase())
        alert("Поздравляю, Вы угадали оба слова");

    else if (answer1.toLocaleLowerCase().trim() === words[0].toLocaleLowerCase() ||
        answer2.toLocaleLowerCase().trim() === words[words.length - 1].toLocaleLowerCase())
        alert("Вы были близки к победе!");

    else
        alert("Вы ответили неверно!");
} 
