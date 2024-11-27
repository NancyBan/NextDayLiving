const trash = document.querySelector('.trash');
const question = document.querySelector('.trash .question');

trash.addEventListener('click', function(){
    question.innerText = "Al mar JAJJAJ";
});

const trashBag = document.getElementById('trashBag');

trashBag.addEventListener('click', function(){
    trash.classList.toggle("active");
});


const sea = document.querySelector('.sea');
trashBag.addEventListener('click', function(){
    
});


