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
    // Forzamos un reflow para que la animación se reinicie
    trashBag.style.animation = 'none';
    trashBag.offsetHeight; // Esto fuerza un reflow
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
        trashBag.style.animation = "none";
        trashBag.style.display = "block";
    }, 4000);
});



const no = document.getElementById('noThrowTrash'); //Variable para en caso de que el usuario pulse no

no.addEventListener('click', function(){
    console.log("No le picaste we");

});

