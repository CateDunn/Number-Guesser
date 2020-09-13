//Game Values

let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Listen for Guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value)

  //Validate Input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please Enter a Number between ${min} and ${max}`, 'red');
  }
  //Check if won
  if (guess === winningNum){
   
    guessInput.disabled = 'true';
    guessInput.style.borderColor = 'green';
    setMessage(`${winningNum} is Correct! You Win!`, 'green');
  } else {

  }

});

//Set Message Function
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
  
}