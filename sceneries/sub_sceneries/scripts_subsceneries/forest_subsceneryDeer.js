const sign = document.querySelector('.sign');
const contentVideo = document.getElementById('video');
const  video = document.querySelector('#video video');

sign.addEventListener('click', function() {
    video.setAttribute('src', 'imgs_sub_sceneries/Venado Viajero.mp4');
    contentVideo.style.display = "block";

    video.addEventListener('ended', function(){
        contentVideo.style.display = "none";
        window.location.href = 'forest_subsceneryDeerSad.html';
    });

});