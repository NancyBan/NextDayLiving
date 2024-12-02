const optionOff = document.getElementById('optionYes');
const optionGo = document.getElementById('optionNo');
const img = document.getElementById('img_forestFire');

optionGo.addEventListener('click', function() {
    img.style.visibility = "visible";
    img.style.opacity = "1";
    
    setTimeout(() => {
        img.src = 'img_sceneries/forest_backgroundFireForest2.jpg';

        setTimeout(() => {
            img.src = 'img_sceneries/forest_backgroundFireForest3.jpg';
        }, 3000);
    }, 3000);
});
