const optionOff = document.getElementById('optionYes');
const optionGo = document.getElementById('optionNo');
const img = document.querySelector('.img_forestFire');

optionGo.addEventListener('click', function() {
    img.style.visibility = "visible";
    img.style.opacity = "1";
    
    setTimeout(() => {
        img.src = 'img_sceneries/forest_backgroundFireForest2';

        setTimeout(() => {
            img.src = 'img_sceneries/forest_backgroundFireForest3';
        },3000);
    },3000);
});

