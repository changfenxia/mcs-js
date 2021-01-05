// Новости от людей Кевина Гарнетта. «Кей Джи» надоело каждый раз перезагружать страницу с приложением для подсчета стоимости выбранных драгоценностей. Он просит переписать всю программу в виде функции haveEnough, которую можно будет вызывать хоть 10 раз подряд.

// Не уроните доверие легенды NBA — распишите параметры и код в теле функции таким образом, чтобы в качестве аргументов использовались все те же переменные, что и раньше, а функция возвращала «Enough $$$» или «Not enough $$$» в зависимости от введенных значений.

const haveEnough = (totalCash, watchesCount, earringsCount, watchesPrice, earringsPrice) => {
        const watchesSum = watchesCount * watchesPrice;
        const earringsSum = earringsCount * earringsPrice;
        return totalCash >= (watchesSum + earringsSum) ?
        'Enough $$$' : 'Not enough $$$';
}

//test
console.log(haveEnough(100, 2, 2, 10, 110));