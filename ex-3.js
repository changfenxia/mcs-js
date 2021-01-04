//https://codepen.io/codingschool/pen/KKVVNyQ
//Dj Rashad

const body = document.body;
const page = document.querySelector('.page')
const name = document.querySelector('.name')
const bio = document.querySelector('.short-bio')
const picture = document.querySelector('.main img')

body.style.backgroundColor = '#696969'
page.style.color = 'ghostwhite'
name.textContent = 'DJ Rashad'
bio.classList.add('animated')
picture.setAttribute('src', 'https://factmag-images.s3.amazonaws.com/wp-content/uploads/2013/09/Rashad-2323.jpg')