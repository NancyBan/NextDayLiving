const sign = document.querySelector('.sign');
const contentVideo = document.getElementById('video');
const  video = document.querySelector('#video video');

sign.addEventListener('click', function() {
    video.setAttribute('src', 'imgs_sub_sceneries/Venado Viajero.mp4');
    contentVideo.style.display = "block";

    video.addEventListener('ended', function(){
        window.location.href = 'forest_subsceneryDeerSad.html';
        contentVideo.style.display = "none";
    });
    setTimeout(() => {
        info.style.visibility = "visible";
        info.style.opacity = "1";
    }, 1000);
});