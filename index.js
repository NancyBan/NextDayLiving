let menu = document.querySelector('.bx-menu');
let subMenu = document.querySelector('.submenu');

document.addEventListener('DOMContentLoaded', function () {
    menu.addEventListener('click', function (e) {
        subMenu.classList.toggle("active");
    });
})