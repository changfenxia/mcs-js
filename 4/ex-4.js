// Напишите скрипт, который будет возвращать в консоль модуль числа при помощи условных выражений.

// 1. В prompt мы вводим само число.
// 2. Проверяем результат на 0 или больше 0.
// 3. В зависимости от результата проверки выводим в консоль либо само число, либо противоположное ему.

const numSpan = document.querySelector('.num');
const modSpan = document.querySelector('.mod');

let num = parseInt(prompt('Введите число: '));

while(isNaN(num)) {
    num = parseInt(prompt('Пожалуйста, введите число, а не строку'));
}
const mod = num < 0 ? -num : num;
numSpan.textContent = num;
modSpan.textContent = mod;
console.log(mod);