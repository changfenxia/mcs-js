
const selectElement = function(el) {
    return document.querySelector(el);
}
const h1 = selectElement('h1');
h1.textContent = 'hey there';

//arrow functions
let myText = (el, text) => el.innerHTML = text
myText(document.body, 'hey')