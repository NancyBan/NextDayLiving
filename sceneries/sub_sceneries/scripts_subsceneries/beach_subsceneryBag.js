const sign2 = document.querySelector('.sign2');

setTimeout(()=> {
    sign2.style.visibility = "visible";
    sign2.style.opacity = "1";
}, 2000);

const background = document.querySelector('#background img');
const turtle = document.querySelector('.img1');

setTimeout(()=> {
    turtle.style.display = "block";
    /*background.setAttribute('src', 'imgs_sub_sceneries/beach_backgroundTurtle2.jpg');*/
}, 4000);