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
        boy.style.animation = "turn 1s linear forwards";
        boy.style.transform = "rotateY(180deg)";
        setTimeout(()=> {
            textFrog.style.display = "none";
            boy.style.animation = "goOut 1s linear forwards";

            setTimeout(()=> {
                frog.style.transform = "rotateY(180deg)";
                frog.style.animation = "";
                frog.style.right = "18%";
                frog.style.bottom = "8%";
            }, 1000);
        }, 1000);
    }, 1000);
}, 2000);