const sign2 = document.querySelector('.sign2');
const background = document.querySelector('#background img');

setTimeout(()=> {
    sign2.style.visibility = "visible";
    sign2.style.opacity = "1";
}, 2000);

setTimeout(()=> {
    background.setAttribute('src', 'imgs_sub_sceneries/beach_backgroundTurtle2.jpg')
}, 4000);