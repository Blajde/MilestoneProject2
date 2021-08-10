let question = document.getElementById('myQuestion');
let alternatives = document.getElementsByClassName('alt');

//Start game//
function startGame() {

}


//Display Question//
document.addEventListener('DOMContentLoaded', function() {
    currentQuestion = gameQuestions[0];
    question.innerHTML = currentQuestion.question;

    alts = alternatives[0];
    alternatives.innerHTML = alts.alternatives;


})


//Next question//
function nextQuestion() {
    for (i=0; i=gameQuestions.length; i++) {
        question.textContent = gameQuestions[i++]['question'];
    };
}


//check answer//

function checkAnswer() {

    let correctAnswer = rightAnswer;

    if (rightAnswer === true) {
        document.getElementsByClassName('alt').innerHTML = fontcolor("#14eb05")
    } else {
        document.getElementsByClassName('alt').innerHTML = fontcolor("#f02000")
    };
}

//Increment score//

function incrementScore() {

    let oldScore = parseInt(document.getElementById('counter').innerText);
    document.getElementById('counter').innerText = ++oldScore;

}

/*
//End Game//

if (gameQuestions[9]) {
    alert(`Congratulations! You got ${counter} points`); 
}

*/



