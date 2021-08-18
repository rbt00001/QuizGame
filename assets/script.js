// add handles to objects inside the DOM
const start = document.querySelector(".start")
const buttons = document.querySelectorAll(".button")
const timeEl = document.querySelector(".time");
const secondsLeft = 60;



function setTime() {
    console.log("I Run")
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left.";

        if(secondsLeft === 0) {     
        clearInterval(timerInterval);
        }
    }, 60000);}

// Start button on click will start timer //
start.addEventListener("click", () => {
   setTime();

})

    // (60 secs) and


    // show questions

//timer function

// If answer incorrect timer will deduct 10 secs


// Game ends when all questions answered or timer hits 0

// Scores saved at the end, save to local storage

