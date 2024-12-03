const boy = document.querySelector('.img1');
const textBoy = document.querySelector('.sign1');
const frog = document.querySelector('.img2');
const frogImg = document.querySelector('.img2 img');
const textFrog = document.querySelector('.sign2');
const frog1 = document.querySelector('.frog1');
const frog2 = document.querySelector('.frog2');
const frog3 = document.querySelector('.frog3');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function animateScene() {
    try {
        // Primera animación
        await sleep(2000);
        textFrog.style.visibility = "visible";
        textFrog.style.opacity = "1";
        frog.style.animation = "jump 1s linear forwards";
        textBoy.style.visibility = "hidden";
        textBoy.style.opacity = "0";

        // El niño se gira
        await sleep(1000);
        boy.style.animation = "turn 1s linear forwards";
        boy.style.transform = "rotateY(180deg)";

        // El niño sale
        await sleep(1000);
        textFrog.style.display = "none";
        boy.style.animation = "goOut 1s linear forwards";

        // La rana se gira
        await sleep(1000);
        frog.style.transform = "rotateY(180deg)";
        frog.style.animation = "right 1s linear forwards";

        // Aparecen las ranas adicionales
        await sleep(1000);
        frog1.style.display = "block";
        await sleep(500);
        frog2.style.display = "block";
        await sleep(500);
        frog3.style.display = "block";

        // Cambio de imagen de la rana
        await sleep(500);
        frogImg.src = 'imgs_sub_sceneries/forest_ranaBatt.png';
        frogImg.style.height = "10rem";

        // Ataque final
        await sleep(500);
        frog.style.right = "auto";
        frog.style.animation = "attack 1s linear forwards";

        await sleep(330); // 33% de 3s
        frog1.style.animation = "fly1 1s linear forwards";
        
        await sleep(660); // 66% de 3s
        frog2.style.animation = "fly2 1s linear forwards";
        
        await sleep(1000);
        frog3.style.animation = "fly3 1s linear forwards";

    } catch (error) {
        console.error('Error en la animación:', error);
    }
}

animateScene();