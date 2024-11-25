const trashBag = document.getElementById('trashBag');
const boxQuestion = document.querySelector('.decisionTrashBag');

trashBag.addEventListener('click', function(){
    boxQuestion.classList.toggle("active");
});

const yes = document.getElementById('throwTrash'); //Variable para en caso de que el usuario pulse si

trashBag.addEventListener('click', function(){
    console.log("Si le picaste we");
    
});

const no = document.getElementById('noThrowTrash'); //Variable para en caso de que el usuario pulse no

trashBag.addEventListener('click', function(){
    console.log("No le picaste we");

});


/*console.log("le picaste :D");*/