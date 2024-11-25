const giftTrash = document.getElementById('giftTrash');

const yes = document.getElementById('throwTrash'); //Variable para en caso de que el usuario pulse si
/*
yes.addEventListener('click', function(){
    boxQuestion.classList.remove("active");
    giftTrash.innerHTML = '<img src="imgs_sceneries/basurita.gif">';
    trashBag.style.display = "none";
    giftTrash.setAttribute('class', 'gift');
    const imgTrash = document.querySelector('#giftTrash img');
    
    setTimeout(()=> {
        if(imgTrash){ 
            imgTrash.remove();
        }
        giftTrash.setAttribute('class', '');
    }, 4000);
});*/

yes.addEventListener('click', function(){
    // Primero ocultamos la pregunta
    boxQuestion.classList.remove("active");
    
    // Iniciamos la animación de la bolsa
    trashBag.style.animation = "throw 5s linear";
    
    // Esperamos a que la bolsa llegue cerca del bote antes de mostrar el gif
    setTimeout(() => {
        giftTrash.innerHTML = '<img src="imgs_sceneries/basurita.gif">';
        trashBag.style.display = "none";
        giftTrash.setAttribute('class', 'gift');
        
        const imgTrash = document.querySelector('#giftTrash img');
        
        setTimeout(() => {
            if(imgTrash){ 
                imgTrash.remove();
            }
            giftTrash.setAttribute('class', '');
            // Reseteamos la animación de la bolsa para el próximo click
            trashBag.style.animation = "none";
        }, 4000);
    }, 3000);
});



const no = document.getElementById('noThrowTrash'); //Variable para en caso de que el usuario pulse no

no.addEventListener('click', function(){
    console.log("No le picaste we");

});

