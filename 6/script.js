// var totalCash = parseInt(prompt("Сколько у тебя кэша?"));
// var watchesCount = parseInt(prompt("Сколько часов будем брать?"));
// var earringsCount = parseInt(prompt("Сколько сережек будем брать?"));
// var watchesPrice = parseInt(prompt("Сколько стоят часы?"));
// var earringsPrice = parseInt(prompt("Сколько стоят сережки?"));

const haveEnough = (totalCash, watchesCount, earringsCount, watchesPrice, earringsPrice) => {
        const watchesSum = watchesCount * watchesPrice;
        const earringsSum = earringsCount * earringsPrice;
        return totalCash >= (watchesSum + earringsSum) ?
        'Enough $$$' : 'Not enough $$$';
}

//test
console.log(haveEnough(100, 2, 2, 10, 110));