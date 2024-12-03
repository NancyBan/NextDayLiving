 const area_gota = document.getElementById('area1');
 const area_humo = document.getElementById('area2');
const content_innundado = document.querySelector('.cont_gif_inundado');
const content_seco = document.querySelector('.cont_gif_humo');

 area_gota.addEventListener('click', function(){
    content_innundado.style.visibility= "visible";
    content_inundado.style.opacity="1";

 });
 
 area_humo.addEventListener('click', function(){
    content_seco.style.visibility= "visible";
    content_seco.style.opacity= "1";
 });