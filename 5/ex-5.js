const rock = 0;
const scissors = 1;
const paper = 2;

// для вывода результатов броска в консоль
const check = ['rock', 'scissors', 'paper'];

// в этот элемент выведем результат
const resultElement = document.querySelector('.result');

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'
let result;

if (player === computer) {
    result = 'Draw!';
} else if ((player === 0 && computer === 1)
|| (player === 1 && computer === 2)
|| (player === 2 && computer === 0)) {
    result = 'Player win!';
} else {
    result = 'Computer win!';
}

console.log('computer: ', check[computer]);
console.log('player: ', check[player]);
console.log(result);
resultElement.textContent = result;
