var startQuizEl = document.getElementsByClassName("StartQuiz");
var questionBoxEl = document.getElementsByClassName("Questionbox");
var endOfQuizEl = document.getElementsByClassName("EndofQuiz");
var highScoresEl = document.getElementsByClassName("StartQuiz");
var buttOne = document.getElementsByClassName("Answer1");
var buttTwo = document.getElementsByClassName("Answer2");
var buttThree = document.getElementsByClassName("Answer3");
var buttFour = document.getElementsByClassName("Answer4");
var answerEl = document.getElementsByClassName("RightorWrong");
var answerSubmitEl = document.getElementsByClassName("Inisubmit");
var scoreListEl = document.getElementsByClassName("NameList");
var startButt = document.getElementsByClassName("StartButt");
var timer = document.getElementById("Timer");
var seconds = 75;

//do this for each element in the html to make it easier to reference in the javascript
function startTimer() {
    var interval = setInterval(function() {
        seconds--;
        console.log(seconds);
        timer.innerHTML =" " + seconds + " seconds";

        if (seconds == 0) {
            clearInterval(interval);
        }
    }, 1000);

}

startTimer();

// function setup()

// blank timer id
    //set interval (function(time))
    // get it to decrease every second

//index that references the current questions

