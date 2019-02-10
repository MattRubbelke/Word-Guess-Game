
var answers = ["bianca", "violet", "bob", "sasha", "bebe", "tyra", "raja", "sharon", "aquaria", "jinkx"]
var e;
var wins = 0;
var losses = 0;
var lettersGuessed = [];
var guessesLeft = 13;
var chosenWord = answers[i=Math.floor(Math.random() * answers.length)];
var answerArray = [];

// START - This function starts the game, chooses a random answer, and inputs blank spaces
        alert("Let's get started. Guess by pressing on the key you think is a letter to the answer. Use the photo as a clue!");
        for (var i=0; i<chosenWord.length; i++){
                answerArray[i] = "_";
                }
        var remainingLetters = chosenWord.length;
        console.log ("this the number of spaces availabe: ", answerArray);
        console.log ("this the answer for the game: ", chosenWord);
        // Takes the random answer and inputs an underscore for each letter
        e = answerArray.join(" ");
        document.getElementById("emptyLetters").innerHTML = e; 
        document.getElementById("guessesLeft").innerHTML = "Number of Guesses Remaining: " + guessesLeft;

//Start crossReference definition
function crossReference(userInput, wordForTheGame){

        console.log("Inputs:",userInput, wordForTheGame);

        for (var j=0; j<wordForTheGame.length; j++){    
                if (userInput == wordForTheGame[j]){
                        wordForTheGame[j] = userInput;      
                        }
                }
        
};//end crossReference definition

// Checks the Input against the answer and replaces the underscore with the correct letter!
function checkInput(userInput, wordForTheGame){
        var guessedRight = false;
        var lettersLeft = wordForTheGame.length
        for (var j=0; j<wordForTheGame.length; j++){
                if (wordForTheGame[j] === userInput){
                        answerArray[j] = userInput;
                        document.getElementById("emptyLetters").innerHTML = answerArray.join(" ");
                        guessedRight=true;
                }
        }
        if (guessedRight) {  } else {
                guessesLeft--;
                console.log("These are how many guesses are left: " + guessesLeft);
                document.getElementById("guessesLeft").innerHTML = "Number of Guesses Remaining: " + guessesLeft;
                if (guessesLeft<1){
                        alert("Game over! Refresh the page to start over!");
                }
        }
// START HERE
        // for (var i = 0; i < wordForTheGame.length; i++) {
        //         if (userInput === wordForTheGame) {
        //           alert("You Win!");
        //         }
        //       }
}; //ends checkInput Definition

function youWin(userInput, wordForTheGame){

        for (var j=0; j<wordForTheGame.length; j++){
        if (answerArray[j] === wordForTheGame){
                alert("Congrats! You win!");
                }
        }
}

// Let's play!
document.onkeyup = function(event){
                var guess = event.key;
                console.log(guess);
                crossReference(guess, chosenWord);
                checkInput(guess, chosenWord);
                document.getElementById("lettersGuessed").prepend(" " + guess);
                }

              
        
