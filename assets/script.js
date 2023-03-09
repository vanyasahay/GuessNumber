var firstMessage = document.getElementsById("txt1");
var secondMessage = document.getElementsById("txt2");
var thirdMessage = document.getElementsById("txt3");

var output = Math.floor(Math.random()*100) + 1;
var guessNumber = 0;
var numberGussed = [];

function yourNumberGuessed(){
    var userCount = document.getElementById("myNumber").value;
    if(userCount < 1 || userCount > 100){
        alert("Guess a number and it should be between 1 and 100 !");
    }
    else{
        numberGussed.push(userCount);
        guessNumber+= 1;

        if(userCount < output){
            txt1.textContent = "Your guess is too low.";
            txt2.textContent = "No. of guesses: " + numberGussed;
            txt3.textContent = "Guessed numbers are: " +
            guessNumber;
        }
        else if(userCount > output){
            txt1.textContent = "Your guess is too high.";
            txt2.textContent = "No. of guesses: " + numberGussed;
            txt3.textContent = "Guessed numbers are: " +
            guessNumber;
        }
        else if(userCount == output){
            txt1.textContent = "Yippie You Win!!";
            txt2.textContent = "The number was: " + output;
            txt3.textContent = "You guessed it in "+ numberGussed + " guesses";
            document.getElementById("mybutton").disabled = true;
        }
    }
}
function resetButton(){
    var resetform= document.getElementById("guess_form");
    resetform.reset()
}
mybutton.addEventListener('click',yourNumberGuessed)