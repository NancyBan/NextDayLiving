const textBoy = document.querySelector('.sign1');
const frog = document.querySelector('.img2');
const textFrog = document.querySelector('.sign2');

setTimeout(()=> {
    textFrog.style.visibility ="visible";
    textFrog.style.opacity ="1";
    frog.style.animation = "jump 1s linear forwards";
    textBoy.style.visibility = "hidden";
    textBoy.style.opacity = "0";

    setTimeout(()=> {
        window.location.href = '';
    }, 2000);
}, 2000);