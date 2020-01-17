var computerMove, playerMove, randomNumber;

playerInput = prompt("Choose your turn! 1: stone, 2: paper, 3: scissors.");

console.log("Answer is: " + playerInput);

if (playerInput == "1") {
  playerMove = "stone";
} else if (playerInput == "2") {
  playerMove = "paper";
} else if (playerInput == "3") {
  playerMove = "scissors";
} else {
  playerMove = "unknown input";
}

printMessage("Your move: " + playerMove);

randomNumber = getRndInteger(1, 3);

if (randomNumber == "1") {
  computerMove = "stone";
} else if (randomNumber == "2") {
  computerMove = "paper";
} else {
  computerMove = "scissors";
}

printMessage("Computer move: " + computerMove);


// var randomNumber, anotherNumber;
//
// randomNumber = getRndInteger(1, 3);
// printMessage("Chosen number: " + randomNumber);
//
// anotherNumber = getRndInteger(11, 19);
// printMessage("anotherNumber: " + anotherNumber);
