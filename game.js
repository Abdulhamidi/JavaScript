const secretNumber=Math.floor(Math.random() * 100);
alert (secretNumber);
let userGuess=null;
let trial=0;

while (userGuess !== secretNumber){
userGuess=prompt("Please guess the number")
trial+=1;
alert('Guess Number: '+ trial)

if (userGuess<secretNumber){
    alert ("Go up man!")
}
else if (userGuess>secretNumber){
    alert ("Go DOWN SIR!")
}

else if (userGuess==secretNumber){
    alert ("congratulations!!! You Won!!")
    break;
}

else {
    alert ("Stop playing around! Enter a valid number!!!")
    }

    if (trial>4){
    alert ("Game Over!!!")
    break;
}
}

