const trash = document.querySelector('.trash');
const question = document.querySelector('.trash .question');

const bag = document.getElementById('trashBag');

trash.addEventListener('click', function(){
    question.innerText = "Al mar JAJJAJ";
    
    setTimeout(() => {
        bag.style.animation = "throw 1s ease-in-out forwards";

        setTimeout(() => {
            window.location.href = 'sub_sceneries/beach_subsceneryBag.html';
        }, 1200);

    }, 200);
});

const trashBag = document.getElementById('trashBag');

trashBag.addEventListener('click', function(){
    trash.classList.toggle("active");
});

const physical = document.getElementById('physical');
const chemical = document.getElementById('chemical');

physical.addEventListener('click', function(){
    window.location.href = 'sub_sceneries/beach_subscenery.html?choice=good';
});

chemical.addEventListener('click', function(){
    window.location.href = 'sub_sceneries/beach_subscenery.html?choice=bad';
});

