const gifTrash = document.getElementById('gifTrash');

const yes = document.getElementById('throwTrash');

yes.addEventListener('click', function(){

    gifTrash.style.animation = 'none';
    gifTrash.offsetHeight;
    gifTrash.style.animation = "throw 4.8s linear";

    boxQuestion.classList.remove("active");
    trashBag.style.display = "none";
    
    gifTrash.innerHTML = '<img src="imgs_sceneries/basurita.gif">';
    gifTrash.setAttribute('class', 'gif');
    
    const imgTrash = document.querySelector('#gifTrash img');
    
    setTimeout(() => {
        if(imgTrash){ 
            imgTrash.remove();
        }
        gifTrash.setAttribute('class', '');
        gifTrash.style.animation = "";
    }, 4400);
});

const no = document.getElementById('noThrowTrash'); //Variable para en caso de que el usuario pulse no

no.addEventListener('click', function(){
    console.log("No le picaste we");

});

