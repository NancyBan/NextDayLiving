const optionOff = document.getElementById('optionYes');
const optionGo = document.getElementById('optionNo');
const contentImg = document.querySelector('.content_img_forestFire');
const img = document.getElementById('img_forestFire');
const content_gif_bambi = document.querySelector('.content_img_bambi'); 

optionGo.addEventListener('click', function() {
    contentImg.style.visibility = "visible";
    contentImg.style.opacity = "1";
    
    setTimeout(() => {
        img.src = 'imgs_sceneries/forest_backgroundFireForest2.jpg';

        setTimeout(() => {
            img.src = 'imgs_sceneries/forest_backgroundFireForest3.jpg';
            setTimeout(()=> {
                contentImg.style.visibility = "hidden";
                contentImg.style.opacity = "0";
                setTimeout(()=> {
                    img.src = 'imgs_sceneries/forest_backgroundFireForest1.jpg';    
                }, 1000);
                
            }, 3000);
        }, 3000);
    }, 3000);
});

optionOff.addEventListener('click', function(){   
    content_gif_bambi.style.visibility = "visible";
    content_gif_bambi.style.opacity = "1";

    setTimeout(()=> {

    }, );
});