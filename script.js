let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

function guessNumber() {
  const randomGuess = prompt(`guess the number between 1 to 100`);

  if (randomGuess == randomNumber) {
    prompt(`Guess is correct`);
  } else if (randomGuess < randomNumber) {
    alert(`Guess too low` + `  try again`);
  } else {
    alert(`Guess too high!`);
  }
}
guessNumber();
