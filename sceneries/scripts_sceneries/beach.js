const trash = document.querySelector('.trash');
const question = document.querySelector('.trash .question');

trash.addEventListener('click', function(){
    question.innerText = "Al mar JAJJAJ";
    setTimeout(() => {
        window.location.href = 'sub_sceneries/beach_subsceneryBag.html';
    }, 1000);
});

const trashBag = document.getElementById('trashBag');

trashBag.addEventListener('click', function(){
    trash.classList.toggle("active");
});

//const sea = document.querySelector('.sea');
const physical = document.getElementById('physical');
const chemical = document.getElementById('chemical');

physical.addEventListener('click', function(){
    window.location.href = 'sub_sceneries/beach_subscenery.html?choice=good';
});

chemical.addEventListener('click', function(){
    window.location.href = 'sub_sceneries/beach_subscenery.html?choice=bad';
});

