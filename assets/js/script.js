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







/*let displayQuestion = getElementById(question);


//First question//
function checkAnswer() {
    if checked == rightAnswer(turnGreen)
    } else {
        turnRed
    }

//Game end//
function finishGame() {
    if (i = 1; i==10; i++) // alert box//
}
//Getting points//
function correctAnswer() {
    document.getElementById("counter")
}
//Wrong answer//
function incorrectAnswer()*/
