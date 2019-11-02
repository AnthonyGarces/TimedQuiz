var startQuizEl = document.getElementsByClassName("StartQuiz");
var questionBoxEl = document.getElementsByClassName("Questionbox");
var endOfQuizEl = document.getElementsByClassName("EndofQuiz");
var highScoresEl = document.getElementsByClassName("StartQuiz");
var question = document.getElementsByClassName("Questioni");
var questionButton = document.getElementsByClassName("QuestionButton");
var buttOne = document.getElementById("Answer1");
var buttTwo = document.getElementById("Answer2");
var buttThree = document.getElementById("Answer3");
var buttFour = document.getElementById("Answer4");
var rightEl = document.getElementsByClassName("Right");
var wrongEl = document.getElementsByClassName("Wrong");
var answerSubmitEl = document.getElementsByClassName("Inisubmit");
var scoreListEl = document.getElementsByClassName("NameList");
var startButt = document.getElementsByClassName("StartButt");
var timer = document.getElementById("Timer");
var seconds = 75;
var spaceBoxEl = document.getElementsByClassName("spaceBox");
var questBox1El = document.getElementsByClassName("questBox1");
var questBox2El = document.getElementsByClassName("questBox2");
var questBox3El = document.getElementsByClassName("questBox3");
var questBox4El = document.getElementsByClassName("questBox4");

function startQuiz() {
    startQuizEl[0].setAttribute("style", "display: none");
    questionBoxEl[0].setAttribute("style", 'display: block'); 
};

function changeQuestion() {
    for (var i = 0; i < questions.length; i++) {
        spaceBoxEl[0].innerText = questions[i].title;
        questBox1El[0].innerHTML = questions[i].Choices[0];
        questBox2El[0].innerHTML = questions[i].Choices[1];
        questBox3El[0].innerHTML = questions[i].Choices[2];
        questBox4El[0].innerHTML = questions[i].Choices[3];
        
        var rightAnswer = questions[i].answer;
        //need to identify the clicked button, and check the html of that button against the right answer from questions.js
        function returnID(clicked_ID) {
            return clicked_ID;
        };
        var clickedButtonID = returnID(clicked_ID);
        
        //if the button html is the right answer, display Right! else display Wrong!
        if (clickedButtonID.innerHTML === rightAnswer) {
            RightEl[0].setAttribute("style", "display: block");
        } else {
            WrongEl[0].setAttribute("style", "display: block");
            seconds - 5;
        }
        //when a button is pressed, add 1 to i and iterate it all over again
        questionButton.addEventListener('click', event => {
            i++;
        });

    }
}
    
//do this for each element in the html to make it easier to reference in the javascript
function startGame() {
    //starts the timer //working
    var interval = setInterval(function() {
        seconds--;
        console.log(seconds);
        timer.innerHTML =" " + seconds + " seconds";

        if (seconds === 0) {
            clearInterval(interval);
        }
    }, 1000);
    
    //change the startQuizEl to questBoxEl //working
    startQuiz();
    
    //Add the questions and buttons to questBoxEl from questions.js
    //checks the clicked button against the answer from questions.js //not working
    //display the answer 
    changeQuestion();
    
}


// changeQuestion();


// function setup()

// blank timer id
    //set interval (function(time))
    // get it to decrease every second

//index that references the current questions
