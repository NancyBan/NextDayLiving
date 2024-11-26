const giftTrash = document.getElementById('giftTrash');

const yes = document.getElementById('throwTrash'); //Variable para en caso de que el usuario pulse si
/*
este da una vuelta y el resto bien

yes.addEventListener('click', function(){
    trashBag.style.animation = 'none';
    trashBag.offsetHeight;
    trashBag.style.animation = "throw 5s linear";
    
    boxQuestion.classList.remove("active");
    giftTrash.innerHTML = '<img src="imgs_sceneries/basurita.gif">';
    giftTrash.setAttribute('class', 'gift');    
    trashBag.style.display = "none";

    const imgTrash = document.querySelector('#giftTrash img');
    
    setTimeout(() => {
        if(imgTrash){ 
            imgTrash.remove();
        }
        giftTrash.setAttribute('class', '');
        trashBag.style.display = "block";
    }, 4000);
});


yes.addEventListener('click', function(){
   let clickCount = 0; // Contador de clics

yes.addEventListener('click', function () {
    clickCount++; // Incrementar el contador
    console.log(`Se hizo clic ${clickCount} veces`);

    if (clickCount === 1) {
        // Acción para el primer clic
        trashBag.style.animation = 'none';
        trashBag.offsetHeight; // Forzar un reflujo para reiniciar la animación
        trashBag.style.animation = "throw 5s linear";

        boxQuestion.classList.remove("active");
        giftTrash.innerHTML = '<img src="imgs_sceneries/basurita.gif">';
        giftTrash.setAttribute('class', 'gift');
        trashBag.style.display = "none";

        const imgTrash = document.querySelector('#giftTrash img');

        setTimeout(() => {
            if (imgTrash) {
                imgTrash.remove();
            }
            giftTrash.setAttribute('class', '');
            trashBag.style.display = "block";
        }, 4000);

    } else if (clickCount === 2) {
        // Acción para el segundo clic
        console.log("Acción específica para el segundo clic.");
        trashBag.style.display = "block";

        // Reiniciar el contador si quieres que vuelva a empezar
        clickCount = 0;
    }
});
});*/

yes.addEventListener('click', function(){

    giftTrash.style.animation = 'none';
    giftTrash.offsetHeight;
    giftTrash.style.animation = "throw 4.8s linear";

    boxQuestion.classList.remove("active");
    trashBag.style.display = "none";
    
    // Mostramos el gif con la animación
    giftTrash.innerHTML = '<img src="imgs_sceneries/basurita.gif">';
    giftTrash.setAttribute('class', 'gift');
    
    // Esperamos a que termine la animación
    const imgTrash = document.querySelector('#giftTrash img');
    
    setTimeout(() => {
        if(imgTrash){ 
            imgTrash.remove();
        }
        giftTrash.setAttribute('class', '');
    }, 4660);
});

const no = document.getElementById('noThrowTrash'); //Variable para en caso de que el usuario pulse no

no.addEventListener('click', function(){
    console.log("No le picaste we");

});

