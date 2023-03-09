var firstMessage = document.getElementsById("txt1");
var secondMessage = document.getElementsById("txt2");
var thirdMessage = document.getElementsById("txt3");

var output = Math.floor(Math.random()*25) + 1;
var guessNumber = 0;
var numberGussed = [];

function yourNumberGuessed(){
    var userCount = document.getElementById("myNumber").value;
    if(userCount < 1 || userCount > 25){
        alert("Guess a number and it should be between 1 and 25 !");
    }
    else{
        numberGussed.push(userCount);
        guessNumber+= 1;

        if(user_guess < output){
            msg1.textContent = "Your guess is too low.";
            msg2.textContent = "No. of guesses: " + numberGussed;
            msg3.textContent = "Guessed numbers are: " +
            guessNumber;
        }
        else if(user_guess > output){
            msg1.textContent = "Your guess is too high.";
            msg2.textContent = "No. of guesses: " + numberGussed;
            msg3.textContent = "Guessed numbers are: " +
            guessNumber;
        }
        else if(user_guess == output){
            msg1.textContent = "Yippie You Win!!";
            msg2.textContent = "The number was: " + output;
            msg3.textContent = "You guessed it in "+ numberGussed + " guesses";
            document.getElementById("mybutton").disabled = true;
        }
    }
}
mybutton.addEventListener('click',yourNumberGuessed)