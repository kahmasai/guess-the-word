const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const remainingSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

// placeholder dot symbol for letters function //

const placeholder = function(){

};
    
// event listener for the guess button //
    guessButton.addEventListener("click", function (e){
        e.preventDefault();
        const guess = letterInput.Value;
        console.log(guess);
        letterInput.value = "";
    });
    