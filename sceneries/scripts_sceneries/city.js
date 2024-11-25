const trashBag = document.getElementById('trashBag');
const boxQuestion = document.querySelector('.decisionTrashBag');

trashBag.addEventListener('click', function(){
    console.log("le picaste :D");
    boxQuestion.classList.toggle("active");
});