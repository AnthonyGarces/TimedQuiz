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
var clickedButtonID = "";
var rightAnswer;

//working, changes the screen to the question box
function startQuiz() {
    startQuizEl[0].setAttribute("style", "display: none");
    questionBoxEl[0].setAttribute("style", 'display: block'); 
};

function endQuiz () {
    questionBoxEl[0].setAttribute("style", "display: none");
    endOfQuizEl[0].setAttribute("style", 'display: block');
}

//each button has this function attached which gives us the id of the clicked button
function returnID(clicked_ID) {
    clickedButtonID = clicked_ID;
};

//Not sure why this isn't working, but the questions past the 1st aren't registering the correct answer.
//They're all wrong,even when I click the right answer
//it seems like the issue here is that isRight is iterating once for the first question and then never again
//it needs to run after each iteration in runGame()
function isRight() {
    //if the id of the clicked button === the id of the answer it should display Right!
    if (clickedButtonID === rightAnswer) {
        console.log(clickedButtonID + "-" + rightAnswer)
        rightEl[0].setAttribute("style", "display: block");
        wrongEl[0].setAttribute("style", "display: none")
    } else {
        //if they're wrong it should display Wrong! and subtract 5 from the timer
        wrongEl[0].setAttribute("style", "display: block");
        rightEl[0].setAttribute("style", "display: none");
        seconds - 5;
    }
};

//function that dynamically changes the text based on the iteration and gives a value
function changeQuestion(x) {
    spaceBoxEl[0].innerText = questions[x].title;
    questBox1El[0].innerHTML = questions[x].Choices[0];
    questBox2El[0].innerHTML = questions[x].Choices[1];
    questBox3El[0].innerHTML = questions[x].Choices[2];
    questBox4El[0].innerHTML = questions[x].Choices[3];
     
    rightAnswer = questions[x].answer;
        
};
    

    

//this function will display the questions after clicking on the button
function runGame(){
    var x = 0
    changeQuestion(x);
    questionButton[0].addEventListener('click', event => {
        changeQuestion(x++);
        isRight();
    });
    questionButton[1].addEventListener('click', event => {
        changeQuestion(x++);
        isRight();
    });
    questionButton[2].addEventListener('click', event => {
        changeQuestion(x++);
        isRight();
    });    
    questionButton[3].addEventListener('click', event => {
        changeQuestion(x++);
        isRight();
    })

    //what I'm trying to do below is change the divs to the high score div once x has been increased to 5
    //for some reason when I run this here, it'll send you straight from the starting div to the form div
    //without cycling through the questions.

    if (x = 5){
        endQuiz();
    };
    
};
    
//do this for each element in the html to make it easier to reference in the javascript
function startGame() {
    //starts the timer //working
    var interval = setInterval(function() {
        seconds--;
        timer.innerHTML =" " + seconds + " seconds";

        if (seconds === 0) {
            clearInterval(interval);
        }
    }, 1000);
    
    //change the startQuizEl to questBoxEl //working
    startQuiz();
    console.log(seconds);
    //display the answer 
    runGame();
    
    // endQuiz();
    
}


// changeQuestion();


// function setup()

// blank timer id
    //set interval (function(time))
    // get it to decrease every second

//index that references the current questions
