var firstMessage = document.getElementsById("txt1");
var secondMessage = document.getElementsById("txt2");
var thirdMessage = document.getElementsById("txt3");

var output = Math.floor(Math.random()*25) + 1;
var guessNumber = 0;
var numberGussed = [];

function yourNumberGuessed(){
    var userCount = document.getElementsById("myNumber").value;
        if(userCount < 1 || userCount > 25){
            alert("Guess a number and it should be between 1 and 25 !");
        }
        else{
            numberGussed.push(userCount);
            guessNumber+= 1;
        
            if(userCount < output){
            firstMessage.textContent = "Think a higher number";
            secondMessage.textContent ="Guess Numbe is:-" + guessNumber;
            thirdMessage.textContent ="Your number is:-" + numberGussed;
             }
            else if(userCount > output){
            firstMessage.textContent = "Think lower number";
            secondMessage.textContent ="Guess Number is:-" + guessNumber;
            thirdMessage.textContent ="Your number is:-" + numberGussed; 
            }
             else if(userCount == output){
            firstMessage.textContent = "You hit the Jackpot!!";
            secondMessage.textContent ="This was the number:- " + output;
            thirdMessage.textContent ="Which you gussed in :- " + guessNumber;
            document.getElementById("mybutton").disabled = true;
             }
        }
}