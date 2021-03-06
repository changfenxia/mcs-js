window.onload = function() {
    const popup = document.querySelector('.popup');
    const getPopup = document.querySelector('.request');
    const closePopup = document.querySelector('.closePopup');
    const openMenu = document.querySelector('.openMenu');
    const closeMenu = document.querySelector('.closeMenu');
    const menu = document.querySelector('.menu');

    getPopup.addEventListener('click', function() {
        popup.style.display = "flex";
    })

    closePopup.addEventListener('click', function() {
        popup.style.display = "none";
    })

    openMenu.addEventListener('click', function() {
        menu.style.left = 0;
    })

    closeMenu.addEventListener('click', function() {
        menu.style.left = "calc(-50vw)";
    })
}

function changeNumber(num) {
    var rand = Math.floor(Math.random() * (9 - 1) + 1);
    console.log(rand);

    return Math.abs(num**rand);
  }
  console.log(changeNumber(3))
