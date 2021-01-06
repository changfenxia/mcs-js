// Напишите скрипт, который выведет на страницу все числа, которые делятся на 6 без остатка от 1 до 100 000.

// count ввел, чтобы посмотреть, сколько всего таких чисел будет, интересно же

window.onload = function() {
    let num = 1;
    let count = 0;
    const ul = document.querySelector('ul');

    while(num <= 100000) {
        if (num % 6 == 0) {
            const li = document.createElement('li');
            li.textContent = `${count}. ${num}`;
            ul.appendChild(li)
            count++;
        }
        num++;
    }
}