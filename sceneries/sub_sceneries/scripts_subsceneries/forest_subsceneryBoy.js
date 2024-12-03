const boy = document.querySelector('.img1');
const textBoy = document.querySelector('.sign1');
const frog = document.querySelector('.img2');
const frogImg = document.querySelector('.img2 img');
const textFrog = document.querySelector('.sign2');
const frog1 = document.querySelector('.frog1');
const frog2 = document.querySelector('.frog2');
const frog3 = document.querySelector('.frog3');

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
                frog.style.animation = "right 1s linear forwards";

                setTimeout(()=> {
                    frog1.style.display = "block";
                    setTimeout(()=> {
                        frog2.style.display = "block";
                        setTimeout(()=> {
                            frog3.style.display = "block";

                            setTimeout(()=> {
                                frogImg.src = 'imgs_sub_sceneries/forest_ranaBatt.png';
                                frogImg.style.height = "10rem";

                                setTimeout(()=> {
                                    frog.style.right = "auto";
                                    frog.style.animation = "attack 1s linear forwards";
                                }, 500);
                            }, 500);
                        }, 500);
                    }, 500);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
    setTimeout(() => {
        info.style.visibility = "visible";
        info.style.opacity = "1";
    }, 1000);
}, 2000);