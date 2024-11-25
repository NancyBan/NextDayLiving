const giftTrash = document.getElementById('giftTrash');

const yes = document.getElementById('throwTrash'); //Variable para en caso de que el usuario pulse si

yes.addEventListener('click', function(){
    console.log("Si le picaste we");
    giftTrash.innerHTML = '<img src="imgs_sceneries/basurita.gif">';
    trashBag.style.display = "none";
    giftTrash.setAttribute('class', 'gift');

    setTimeout(()=> {
        giftTrash.remove();
        trashBag.style.display = "block"
        giftTrash.setAttribute('', '');
    }, 4660);
});

const no = document.getElementById('noThrowTrash'); //Variable para en caso de que el usuario pulse no

no.addEventListener('click', function(){
    console.log("No le picaste we");

});
