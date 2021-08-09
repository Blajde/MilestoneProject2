let question = document.getElementById('myQuestion');
let alternatives = document.getElementsByClassName('alt');

//Start game//
document.addEventListener('DOMContentLoaded', function() {
    question.textContent = gameQuestions[0]['question']
//-------------------------------------------------------------//
    alternatives.textContent = gameQuestions[0]['alt']

    for (let i = 0; i < gameQuestions.length; i++)
        //_______________________//

})


//Next question//
function nextQuestion() {
    for (i=0; i=gameQuestions.length; i++) {
        question.textContent = gameQuestions[i++]['question']
    };
}


//check answer//

function checkAnswer()

    let correctAnswer = rightAnswer;

    if (rightAnswer === true) {
        document.getElementsByClassName('alt').innerHTML = fontcolor("#14eb05")
    } else {
        document.getElementsByClassName('alt').innerHTML = fontcolor("#f02000")
    };


//Increment score//

function incrementScore() {

    let oldScore = parseInt(document.getElementById('counter').innerText);
    document.getElementById('counter').innerText = ++oldScore;

}


//End Game//

if (gameQuestions[9]) {
    alert(`Congratulations! You got ${counter} points`); 
}





