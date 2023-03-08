var output = Math.floor(Math.random()*100) + 1;
var guessNumber = 0;
var numberGussed = [];

var firstMessage = document.getElementsById("txt1");
var secondMessage = document.getElementsById("txt2");
var thirdMessage = document.getElementsById("txt3");

functionNumberGuessed(){
    var userCount = document.getElementsById("myNumber").value;
        if(userCount < 1 || userCount > 100){
            alert("Guess a number and it should be between 1 and 100 !");
        }
        else{
            numberGussed.push();
            guessNumber+=1;
        }

        if(userCount < output){
            firstMessage.textContent = "Think higher number";
            secondMessage.textContent ="Guess Numbe is:-" + guessNumber;
            thirdMessage.textContent ="Your number is:-" + numberGussed;

        }
        else if(userCount < output){
            firstMessage.textContent = "Think lower number";
            secondMessage.textContent ="Guess Number is:-" + guessNumber;
            thirdMessage.textContent ="Your number is:-" + numberGussed; 
        }
        else if(userCount < output){
            firstMessage.textContent = "You hit the Jackpot!!";
            secondMessage.textContent ="This was the number:- " + guessNumber;
            thirdMessage.textContent ="which you gussed in :- " + numberGussed;
        }
}