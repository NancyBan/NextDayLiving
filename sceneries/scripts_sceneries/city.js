const trashBag = document.getElementById('trashBag');
const boxQuestion = document.getElementsByClassName('decisionTrashBag');

trashBag.addEventListener('click', function(){
    boxQuestion.classList.toggle("active");
});