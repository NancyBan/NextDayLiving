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
    // Ocultamos la bolsa de basura original
    trashBag.style.display = "none";
    
    // Mostramos el gif con la animación
    giftTrash.innerHTML = '<img src="imgs_sceneries/basurita.gif">';
    giftTrash.setAttribute('class', 'gift');
    
    // Después de 4.66s (duración del gif y la animación) limpiamos todo
    setTimeout(() => {
        giftTrash.innerHTML = '';
        giftTrash.setAttribute('class', '');
        trashBag.style.display = "block";
    }, 4660); // 4.66s en milisegundos
});*/

yes.addEventListener('click', function(){
    trashBag.style.animation = 'none';
    trashBag.offsetHeight;
    trashBag.style.animation = "throw 5s 1s linear";

    // Ocultamos la bolsa de basura original
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
    }, 5000); // Aumentamos un poco el tiempo para asegurar que el gif termine
});

const no = document.getElementById('noThrowTrash'); //Variable para en caso de que el usuario pulse no

no.addEventListener('click', function(){
    console.log("No le picaste we");

});

