const trashBag = document.getElementById('trashBag');
const boxQuestion = document.getElementsByClassName('decisionTrashBag');

trashBag.addEventListener('click', function(){
    console.log("le picaste :D");
    boxQuestion.classList.toggle("active");
});