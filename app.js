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
   gameOver(true, `${winningNum} is Correct! You Win!`, 'green')

  } else {
    //wrong number
    guessesLeft -= 1;
    if(guessesLeft === 0){
      //game over - lost
      gameOver(false, `Game Over. You Lost. The correct number was ${winningNum}`, 'red');
    } else {
      //game continues, answer wrong
      guessInput.style.borderColor = 'red';
      guessInput.value = '';
      setMessage(`Guess is not correct. ${guessesLeft} guesses left`, 'red');
    }

  }

});

//Set Message Function
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
  
}

//Game Over Function
function gameOver(won, msg){
  let color;

  guessInput.disabled = 'true';

  won === true ? color = 'green' : color = 'red'
  guessInput.style.borderColor = color;
  message.style.color = color;


  setMessage(msg);

};