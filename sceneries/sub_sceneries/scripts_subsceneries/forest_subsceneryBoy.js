const textBoy = document.querySelector('.sign1');
const frog = document.querySelector('.img2');
const textFrog = document.querySelector('.sign2');

setTimeout(()=> {
    frog.style.animation = "jump 1s linear forwards";
    textFrog.style.visibility ="visible";
    textFrog.style.opacity ="1";
    textBoy.style.visibility = "hidden";
    textBoy.style.opacity = "0";
}, 1000);