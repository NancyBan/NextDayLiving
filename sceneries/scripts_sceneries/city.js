const gifTrash = document.getElementById('gifTrash');
const confetti = document.getElementById('confetti');

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
        confetti.style.display = "block";

        setTimeout(() => {
            confetti.style.display = "none";
        }, 5000);
        
    }, 4400);
});

const no = document.getElementById('noThrowTrash'); //Variable para en caso de que el usuario pulse no
const contentImg = document.querySelector('.content_img_trashCity');
const img = document.getElementById('img_trashCity');

no.addEventListener('click', function(){
    contentImg.style.visibility = "visible";
    contentImg.style.opacity = "1";
    
    setTimeout(() => {
        img.src = 'imgs_sceneries/city_trashCity2.jpg';

        setTimeout(() => {
            img.src = 'imgs_sceneries/city_trashCity3.jpg';
            setTimeout(()=> {
                contentImg.style.visibility = "hidden";
                contentImg.style.opacity = "0";
                setTimeout(()=> {
                    img.src = 'imgs_sceneries/city_trashCity.jpg';    
                }, 1000);
                
            }, 3000);
        }, 3000);
    }, 3000);
});

