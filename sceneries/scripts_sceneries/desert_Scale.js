const area_gota = document.getElementById('area1');
const area_humo = document.getElementById('area2');
const content_innundado = document.querySelector('.content_gif_inundado');
const content_seco = document.querySelector('.content_gif_seco');
const info1 = document.querySelector('.info1');
const info2 = document.querySelector('.info2');
const info3 = document.querySelector('.info3');

area_gota.addEventListener('click', function(){
    setTimeout(()=>{
        content_innundado.style.visibility= "visible";
        content_innundado.style.opacity="1";

        setTimeout(()=> {
            content_innundado.style.visibility= "hidden";
            content_innundado.style.opacity = "0";

            info1.style.visibility= "visible";
            info1.style.opacity="1";
        }, 10400);
    }, 1000);
});

area_humo.addEventListener('click', function(){
    setTimeout(()=>{
        content_seco.style.visibility= "visible";
        content_seco.style.opacity= "1";

        setTimeout(()=> {
            content_seco.style.visibility= "hidden";
            content_seco.style.opacity= "0";

            info2.style.visibility= "visible";
            info2.style.opacity="1";
        }, 10400);
    }, 1000);
});