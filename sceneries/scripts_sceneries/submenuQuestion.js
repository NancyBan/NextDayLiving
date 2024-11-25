const trashBag = document.getElementById('trashBag');
const boxQuestion = document.querySelector('.decisionTrashBag');

trashBag.addEventListener('click', function(){
    boxQuestion.classList.toggle("active");
});
