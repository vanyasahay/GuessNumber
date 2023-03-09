var firstMessage = document.getElementById("txt1");
var secondMessage = document.getElementById("txt2");
var thirdMessage = document.getElementById("txt3");

var output = Math.floor(Math.random()*100) + 1;
var guessNumber = 0;
var numberGussed = [];

function yourGuessedNumber(){
    var userCount = document.getElementById("myNumber").value;
    if(userCount < 1 || userCount > 100){
        alert("Guess a number and it should be between 1 and 100 !");
    }
    else{
        numberGussed.push(userCount);
        guessNumber+= 1;

        if(userCount < output){
            firstMessage.textContent = "Think Lower Number.";
            secondMessage.textContent = "No. of guesses: " + numberGussed;
            thirdMessage.textContent = "Guessed numbers are: " +
            guessNumber;
        }
        else if(userCount > output){
            firstMessage.textContent = "Think higher number.";
            secondMessage.textContent = "No. of guesses: " + numberGussed;
            thirdMessage.textContent = "Guessed numbers are: " +
            guessNumber;
        }
        else if(userCount == output){
            firstMessage.textContent = "Congratulations! You hit the Jackpot";
            secondMessage.textContent = "The number was: " + output;
            thirdMessage.textContent = "You guessed it in "+ numberGussed + " guesses";
            document.getElementById("mybutton").disabled = true;
        }
    }
}

mybutton.addEventListener('click',yourGuessedNumber)