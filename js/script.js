var computerMove, playerMove, randomNumber;

randomNumber = getRndInteger(1, 3);

if (randomNumber == "1") {
  computerMove = "stone";
} else if (randomNumber == "2") {
  computerMove = "paper";
} else {
  computerMove = "scissors";
}

printMessage("I played " + computerMove + ". If your move is " + playerMove +" then you won!");



// var randomNumber, anotherNumber;
//
// randomNumber = getRndInteger(1, 3);
// printMessage("Chosen number: " + randomNumber);
//
// anotherNumber = getRndInteger(11, 19);
// printMessage("anotherNumber: " + anotherNumber);
