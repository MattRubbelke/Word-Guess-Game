// A quick note about my game: I tried for a very long to try and make the game reset for the user to keep playing;
// however, I was unsuccessful. Instead, I optimized the game for a single play. Instead of choosing the easier Psychic option,
// I wanted to challenge myself to the harder assignment. While I didn't meet all expectations, I still believe the game is usable.


var answers = ["bianca", "violet", "bob", "sasha", "bebe", "tyra", "raja", "sharon", "jinkx"]
var e;
var wins = 0;
var losses = 0;
var lettersGuessed = [];
var guessesLeft = 6;
var chosenWord = answers[i=Math.floor(Math.random() * answers.length)];
var answerArray = [];
var correctGuess = 0;
var hasFinished = false;
var getStarted = false;

// START - This function starts the game, chooses a random answer, and inputs blank spaces
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

// Resets game after win - I commented this out. I was attempting to reset the game after the user guessed correctly. 
// function resetWin(){
//         var chosenWord = answers[i=Math.floor(Math.random() * answers.length)];
//         for (var i=0; i<chosenWord.length; i++){
//                 answerArray[i] = "_";
//                 }
//         // Takes the random answer and inputs an underscore for each letter
//         e = answerArray.join(" ");
//         document.getElementById("emptyLetters").innerHTML = e; 
//         document.getElementById("guessesLeft").innerHTML = "Number of Guesses Remaining: " + guessesLeft;
//         var guess = event.key;
//         document.getElementById("lettersGuessed").prepend(" " + guess);
//         play;
//         } //END


// Checks the Input against the answer and replaces the underscore with the correct letter!
function checkInput(userInput, wordForTheGame){
        var guessedRight = false;
        document.getElementById("lettersGuessed").prepend(" " + userInput)
        for (var j=0; j<wordForTheGame.length; j++){
                if (wordForTheGame[j] === userInput){
                        answerArray[j] = userInput;
                        document.getElementById("emptyLetters").innerHTML = answerArray.join(" ");
                        guessedRight=true;
                }
        } //end!        

// This if/else determines whether the user's input is in the answer. It does account for double letters!
        if (guessedRight) { 
                for (var k=0; k<wordForTheGame.length; k++){
                if (userInput === wordForTheGame.charAt(k)){
                        correctGuess++;
                        }                    
                }

                if (correctGuess === wordForTheGame.length) {
                        wins++;
                        document.getElementById("wins").innerHTML = "Congdragulations. You are the winner of this challenge. You won! Refresh the page, and try to guess the other queens!";
                        var winDiv = document.createElement("div");
                        if (wordForTheGame === "bianca"){
                                winDiv.innerHTML = "<img src=assets/images/bianca.jpg> <br> <h3> Bianca Del Rio!</h3>";
                        }
                        if (wordForTheGame === "aquaria"){
                                winDiv.innerHTML = "<img src=assets/images/aquaria.jpg> <br> <h3> Aquaria!</h3>";
                        }
                        if (wordForTheGame === "bebe"){
                                winDiv.innerHTML = "<img src=assets/images/bebe.jpg><br> <h3> Bebe Zahara Benet!</h3>";

                        }
                        if (wordForTheGame === "bob"){
                                winDiv.innerHTML = "<img src=assets/images/bob.jpg> <br> <h3> Bob the Drag Queen!</h3>";
                        }
                        if (wordForTheGame === "jinkx"){
                                winDiv.innerHTML = "<img src=assets/images/jinkx.jpg> <br> <h3> Jinkx Monsoon!</h3>";
                        }
                        if (wordForTheGame === "raja"){
                                winDiv.innerHTML = "<img src=assets/images/raja.jpg><br> <h3> Raja!</h3>";
                        }
                        if (wordForTheGame === "sasha"){
                                winDiv.innerHTML = "<img src=assets/images/sasha.jpg><br> <h3> Sasha Velour!</h3>";
                        }
                        if (wordForTheGame === "sharon"){
                                winDiv.innerHTML = "<img src=assets/images/sharon.jpg><br> <h3> Sharon Needles!</h3>";
                        }
                        if (wordForTheGame === "tyra"){
                                winDiv.innerHTML = "<img src=assets/images/tyra.jpg> <br> <h3> Tyra Sanchez!</h3>";
                        }
                        if (wordForTheGame === "violet"){
                                winDiv.innerHTML = "<img src=assets/images/violet.jpg> <br> <h3> Violet Chachki!</h3>";
                        }
                        document.getElementById("queen").replaceWith(winDiv);
                        hasFinished = true;
                        document.getElementById("emptyLetters").attributes("display:none");
                }
        } else {
                guessesLeft--;
                console.log("These are how many guesses are left: " + guessesLeft);
                document.getElementById("guessesLeft").innerHTML = "Number of Guesses Remaining: " + guessesLeft;
                if (guessesLeft<1){
                        document.getElementById("wins").innerHTML ="Sashay away...Game over! Refresh the page to start over!";
                        var winDiv = document.createElement("div");
                        winDiv.innerHTML = "<img src=assets/images/rupauljudgingyou.gif>";
                        document.getElementById("queen").replaceWith(winDiv);

                }
        }
}



// Let's play!
var play = document.onkeyup = function (event){
                getStarted = true;
                var guess = event.key;
                console.log(guess);
                crossReference(guess, chosenWord);
                checkInput(guess, chosenWord);
                if (hasFinished){
                        hasFinished = false;
                }
        }



