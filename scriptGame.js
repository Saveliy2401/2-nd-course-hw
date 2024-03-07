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
    let fruties = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    fruties = fruties.sort(() => Math.random() - 0.5);
    alert(`Запомни слова: ${fruties}`);

    let frutiesOne = prompt(`Какой фрукт был первый ?`);

    let frutiesTwo = prompt(`Какой фрукт был последний ?`);




    if (frutiesOne.toLowerCase() === fruties.indexOf[0] && frutiesTwo.toLowerCase() === fruties.indexOf[6]) {
        alert(`Угадал`)

    } else if (
        frutiesOne !== fruties.indexOf[0] ||
        frutiesTwo !== fruties.indexOf[6]) {
        alert(`Не угадал`);

    } else {
        alert(`Вы были близки к победе!`);
    }
}

