 const area_gota = document.getElementById('area1');
 const area_humo = document.getElementById('area2');
const content_innundado = document.querySelector('.content_gif_inundado');
const content_seco = document.querySelector('.content_gif_seco');

 area_gota.addEventListener('click', function(){
    content_innundado.style.visibility= "visible";
    content_innundado.style.opacity="1";

    setTimeout(()=> {
        content_innundado.style.visibility= "hidden";
        content_innundado.style.opacity = "0";
    }, 10300);
 });
 
 area_humo.addEventListener('click', function(){
    content_seco.style.visibility= "visible";
    content_seco.style.opacity= "1";

    setTimeout(()=> {
        content_seco.style.visibility= "hidden";
        content_seco.style.opacity= "0";
    }, 10300);
 });