const sign2 = document.querySelector('.sign2');

const background = document.querySelector('#background img');
const turtle = document.querySelector('.img1');

setTimeout(()=> {
    sign2.style.visibility = "visible";
    sign2.style.opacity = "1";

    //voltea la tortuga
    setTimeout(()=> {
        turtle.style.display = "block";
        background.setAttribute('src', 'imgs_sub_sceneries/beach_backgroundTurtle2.jpg');

        //spam de medusas
        setTimeout(() => {
            for (let i = 0; i < 10; i++) { // Cambia el número según cuántas imágenes quieras spamear
                const medusa = document.createElement('img');
                medusa.src = 'imgs_sub_sceneries/beach_jellyfish.png';
                medusa.style.position = 'absolute';
                medusa.style.left = `${Math.random() * window.innerWidth}px`;
                medusa.style.top = `${Math.random() * window.innerHeight}px`;
                medusa.style.width = '50px'; // Ajusta el tamaño según sea necesario
                medusa.style.height = '50px'; // Ajusta el tamaño según sea necesario
                document.body.appendChild(medusa);
            }

        }, 2000);
    }, 2000);

}, 2000);