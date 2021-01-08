// Создайте форму, которая будет по сабмиту рассчитывать синус введенного в input угла. Вам понадобится самостоятельно найти этот метод объекта Math.

window.onload = function() {
    const angle = document.forms[0].elements.angle;
    const btn = document.querySelector('.submit');
    const result = document.querySelector('.result');

    btn.addEventListener('click', function(e) {
        e.preventDefault();
        result.textContent = Math.sin(angle.value * Math.PI / 180);
    });
}