// На основе массива выше создайте страницу, демонстрирующую сравнение курсов криптовалют.
// Название валюты и цену берем из массива. Рисуем цветной блок, ширина которого зависит от цены.

let crypto = [
  {
    name: "Bitcoin",
    price: 1388.37
  },
  {
    name: "Ethereum",
    price: 716
  },
  {
    name: "Litecoin",
    price: 140
  }
]

// Создание блока для отдельной валюты вынес в отдельную функцию
function createCurrencyBlock(name, price) {
  const cblock = document.createElement('div');
  cblock.className = `${name.toLowerCase()} currency-block`;
  const cname = document.createElement('h2');
  cname.textContent = name;
  cblock.appendChild(cname);
  const cprice = document.createElement('p');
  cprice.textContent = price;
  cblock.appendChild(cprice);
  const cpriceGraph = document.createElement('div');
  cpriceGraph.className = 'price-graph';
  cpriceGraph.style.width = price / 25 + 'vw';
  cblock.appendChild(cpriceGraph);
  return cblock;
}

window.onload = function() {
  const page = document.querySelector('.page');
  crypto.forEach((currency) => {
    const currencyBlock = createCurrencyBlock(currency.name, currency.price);
    page.appendChild(currencyBlock);
  });
}

