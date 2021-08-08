let question = document.getElementById('myQuestion');
let alternatives = document.getElementsByClassName('alt');

//Start game//
document.addEventListener('DOMContentLoaded', function() {
    question.textContent = gameQuestions[0]['question']
//-------------------------------------------------------------//
    alternatives.textContent = gameQuestions[0]['alt']

    for (let i = 0; i < gameQuestions.length; i++)
        

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
        document.getElementsByClassName('alt'."".fontcolor("#14eb05"))
    } else {
        document.getElementsByClassName('alt'."".fontcolor("#f02000"))
    };


//Increment score//









/*let displayQuestion = getElementById(question);

//Start game//
function startGame() {

}
//Display question//
function displayQuestion(question) {
    document.getElementById('question').textContent = question;
}
//First question//
function checkAnswer() {
    if checked == rightAnswer(turnGreen)
    } else {
        turnRed
    }
//Next question//
function nextQuestion() {
    onClick == nextQuestion
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
