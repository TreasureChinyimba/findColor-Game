const wrongAnswers = document.querySelectorAll('#wrong')
wrongAnswers.forEach(wrongAnswer => {
    wrongAnswer.addEventListener('click', ()=>{
        wrongAnswer.style = 'animation-name: wrong;'
    })
});

const correctAnswer = document.getElementById('correct');
correctAnswer.addEventListener('click', ()=>{
    correctAnswer.style = 'animation-name: correct;'
    alert('you are correct')
})