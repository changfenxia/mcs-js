// Добавьте на страницу форму с инпутом и кнопку «узнать температуру».
// По сабмиту формы выводите температуру в том городе, который указан в инпуте.
// Если чувствуете силы — добавьте второй вывод со скоростью ветра.

const apikey = '2d40cbf794a458b8fd13699eba785e42';

const submit = document.querySelector('input[type="submit');
const cityInput = document.querySelector('#city');

submit.addEventListener('click', function(e) {
    e.preventDefault();
    const cityName = cityInput.value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();

    if (xhr.status != 200) {
        console.log(xhr.statusText);
    } else {
        const jsonObject = JSON.parse(xhr.responseText);
        const temperature = document.querySelector('.temperature span');
        temperature.textContent = Math.floor(jsonObject.main.temp - 273);
        const windSpeed = document.querySelector('.wind span');
        windSpeed.textContent = jsonObject.wind.speed;
        const city = document.querySelector('.city');
        city.textContent = cityName;
    }
})


