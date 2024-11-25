const giftTrash = document.getElementById('giftTrash');

const yes = document.getElementById('throwTrash'); //Variable para en caso de que el usuario pulse si

yes.addEventListener('click', function(){
    giftTrash.innerHTML = '<img src="imgs_sceneries/basurita.gif">';
    trashBag.style.display = "none";
    giftTrash.setAttribute('class', 'gift');
    
    boxQuestion.classList.remove("active");
    const imgTrash = document.querySelector('#giftTrash img');
    
    setTimeout(()=> {
        if(imgTrash){ 
            imgTrash.remove();
        }
        trashBag.style.display = ""
        giftTrash.setAttribute('', '');
    }, 4);
});

const no = document.getElementById('noThrowTrash'); //Variable para en caso de que el usuario pulse no

no.addEventListener('click', function(){
    console.log("No le picaste we");

});

