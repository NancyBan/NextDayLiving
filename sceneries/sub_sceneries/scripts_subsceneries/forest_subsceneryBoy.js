const boy = document.querySelector('.img1');
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
        boy.style.animation = "goOut 2s linear forwards";
    }, 1000);
}, 2000);