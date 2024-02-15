function startGameWeather() {
    let ans = Number(prompt("Введите число"));
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
startGameWeather()

