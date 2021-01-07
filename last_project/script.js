window.onload = function() {
    class Person {
        constructor(name) {
            this.name = name;
            this.happiness = 0;
        }

        hasCat() {
            this.happiness += 1;
            return this.happiness;
        }

        hasRest() {
            this.happiness += 1;
            return this.happiness;
        }

        hasMoney() {
            this.happiness += 1;
            return this.happiness;
        }

        //вынес проверку погоды в отдельную функцию
        checkWeather() {
            const city = 'moscow'
            const apikey = '2d40cbf794a458b8fd13699eba785e42';
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            xhr.send();

            if(xhr.status != 200) {
                console.log(xhr.statusText);
            } else {
                const weatherObject = JSON.parse(xhr.responseText);
                return(weatherObject.main.temp - 273);
            }
        }

        isSunny() {
            console.log(this.checkWeather())
            if(this.checkWeather() > 15) {
                this.happiness += 1;
            }
            return this.happiness;
        }
    }
    const submit = document.querySelector('input[type="submit"');
    submit.addEventListener('click', function(e) {

        const inputName = document.querySelector('input[name="name"]');
        const inputCat = document.querySelector('input[name="cat"]:checked');
        const inputRest = document.querySelector('input[name="rest"]:checked');
        const inputMoney = document.querySelector('input[name="money"]:checked');

        e.preventDefault();
        const client = new Person(inputName.value);
        if(inputCat.value === 'yes') {
            client.hasCat();
        }

        if(inputRest.value === 'yes') {
            client.hasRest();
        }

        if(inputMoney.value === 'yes') {
            client.hasMoney();
        }

        client.isSunny();

        const personName = document.querySelector('.personName');
        personName.textContent = client.name + ':';
        const icon = document.querySelector('.icon');
        console.log(client.happiness)
        if(client.happiness === 4) {
            icon.innerHTML = '&#128513;';
        } else if (client.happiness === 2 || client.happiness === 3) {
            icon.innerHTML = '&#128528;';
        } else {
            icon.innerHTML = '&#x2639;';
        }
    })
}