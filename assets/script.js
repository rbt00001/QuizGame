//grab button on html and add click listener to start the quiz function
var generateBtn = document.querySelector(".btn-primary");
generateBtn.addEventListener("click", strtQuiz);

//make vars for questions, answers, correct, wrong, final score
var qzQuestion = [{
    question: " What do 'if' and 'else' statements always evaluate to?",
    questionOptions: ["A) always false", "B) always true", "C) true or false depending on statement", "D) undefined"],
    answer: 2,
}, {
    question: " What are the 3 building blocks of the internet?",
    questionOptions: ["A) legos, logs, popsicle sticks", "B) HTML, CSS, JavaScript", "C) ice, wind, fire", "D) coffee, energy drinks, mountain dew"],
    answer: 1,
}, {
    question: " What type of language is JavaScript?",
    questionOptions: ["A) spanish", "B) frustrating", "C) pig-latin", "D) dynamic"],
    answer: 3,
}, {
    question: " What does var do?",
    questionOptions: ["A) declares a variable", "B) declares a war", "C) declares an eclair", "D) declares mistakes were made"],
    answer: 0,
}];
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("container");
var questionNum = 0;
var finalScore = 0;
var replaceItem = document.querySelector("#para");
var secondsOnTimer = 60;
var timerInterval;

// function call to 1st question with answer
function strtQuiz() {
    //add timer
    function setTime() {
        timerInterval = setInterval(function () {
            secondsOnTimer--;
            timeEl.textContent = secondsOnTimer + " seconds remaining";

            if (secondsOnTimer === 0) {
                clearInterval(timerInterval);
                provideInfo();
            }

        }, 1000);
    }

    setTime()

    // grab paragraph div and set to question 1
    document.getElementById("para").innerHTML = qzQuestion[0].question;
    //grabbed start button to hide after click
    var btn = document.getElementById("clicker");
    btn.parentNode.removeChild(btn);
    // array of question options
    var optionText = [qzQuestion[0].questionOptions[0], qzQuestion[0].questionOptions[1], qzQuestion[0].questionOptions[2], qzQuestion[0].questionOptions[3]]
    //loop creating answer buttons
    for (var i = 0; i < 4; i++) {
        var option = document.createElement("button");
        option.setAttribute("style", "background-color: purple; display: block; margin: auto; margin-top: 2%; color: thistle; width: 25%;");
        option.className = "btn btn-primary ansButtons";
        option.id = "choice" + i;
        option.value = i;
        option.innerHTML = optionText[i];
        mainEl.appendChild(option);

    }
    // adding event listeners to new buttons
    document.getElementById("choice0").addEventListener("click", secondPart);
    document.getElementById("choice1").addEventListener("click", secondPart);
    document.getElementById("choice2").addEventListener("click", secondPart);
    document.getElementById("choice3").addEventListener("click", secondPart);

}
// calling next function to update and eval questions
function secondPart() {
    if (event.target.value == qzQuestion[questionNum].answer) {
        finalScore++;
        questionNum++;
        console.log("correct");

    } else {
        //decrease timer
        secondsOnTimer = secondsOnTimer - 10;
    }

    //find if this is the final question
    if (questionNum === qzQuestion.length) {
        clearInterval(timerInterval);
        provideInfo();
        console.log("last question");
    } else {
        // when function is done this increments the question number  

        updateQuestions();
    }
}
// this updates all text based on question number
function updateQuestions() {
    document.getElementById("para").innerHTML = qzQuestion[questionNum].question;

    document.getElementById("choice0").innerHTML = qzQuestion[questionNum].questionOptions[0];
    document.getElementById("choice1").innerHTML = qzQuestion[questionNum].questionOptions[1];
    document.getElementById("choice2").innerHTML = qzQuestion[questionNum].questionOptions[2];
    document.getElementById("choice3").innerHTML = qzQuestion[questionNum].questionOptions[3];

}
// when quiz is over promps the users score and a place for them to enter initials
//pop up form to check score and add initials


function provideInfo() {
    timeEl.textContent = " ";

    var finalPopUp = document.createElement("form");
    finalPopUp.setAttribute("type", "form");
    finalPopUp.setAttribute("style", "color: purple; margin-left: 33.33%");

    var formLabel = document.createElement("label");
    formLabel.innerHTML = "Initials";

    var formInput = document.createElement("input");
    formInput.setAttribute("type", "text");


    var newButton = document.createElement("button");
    newButton.innerHTML = "Submit";



    var displayFinalScore = document.createElement("div");
    displayFinalScore.innerHTML = "You got " + finalScore + " out of " + qzQuestion.length + " correct";
    displayFinalScore.setAttribute("style", "color: purple; margin-left: 33.33%");

    mainEl.parentNode.replaceChild(displayFinalScore, mainEl);
    displayFinalScore.appendChild(finalPopUp);
    finalPopUp.appendChild(formLabel);
    finalPopUp.appendChild(formInput);
    finalPopUp.appendChild(newButton);

    //Leaderboard 




}