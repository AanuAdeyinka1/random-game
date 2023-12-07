let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

function guessNumber() {
  const randomGuess = console.log(`guess the number between 1 to 100`);

  if (randomGuess == randomNumber) {
    console.log(`Guess is correct`);
  } else if (randomGuess < randomNumber) {
    console.log(`Guess too low` + `  try again`);
  } else {
    console.log(`Guess too high!`);
  }
}
guessNumber();
