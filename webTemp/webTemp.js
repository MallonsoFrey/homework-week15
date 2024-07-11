const cities = ['Москва', 'Санкт-Петербург', 'Сан-Паулу', 'Лондон', 'Монако'];
const temps = [];
let maxTemp = -Infinity;//любая реальная температура будет больше этого значения
//первое сравнение temp > maxTemp всегда будет истинным при первом вводе температуры
let minTemp = Infinity;//любая реальная температура будет меньше этого значения
//первое сравнение temp < minTemp также всегда будет истинным при первом вводе температуры

const tempsDisplay = document.querySelector('.temps')
const minmaxTemp = document.querySelector('.minmax')
let minTempText = document.createElement('p');
let maxTempText = document.createElement('p'); 

for (let city of cities) {
    let temp = Number(prompt(`Введите температуру в ${city}: `));
    const obj = {City: city, Temperature: temp};
    temps.push(obj);

    if (temp > maxTemp) {
        maxTemp = temp;
    }

    if (temp < minTemp) {
        minTemp = temp;
    }
}

maxTempText.textContent = 'Максимальная температура: ' + maxTemp + '°';
minTempText.textContent = 'Минимальная температура: ' + minTemp + '°';
minmaxTemp.append(maxTempText, minTempText)

for (let temp of temps) {
    let infoCity = document.createElement('p');
    let infoTemp = document.createElement('span');

    infoCity.textContent = temp.City;
    infoTemp.textContent = 'Температура в городе: '+ temp.Temperature + '°';
    tempsDisplay.append(infoCity, infoTemp)
}

