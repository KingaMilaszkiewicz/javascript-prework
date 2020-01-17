var computerMove = "stone";
var playerMove = "paper";
var randomNumber, anotherNumber;

printMessage("I played " + computerMove + ". If your move is " + playerMove +" then you won!");

randomNumber = getRndInteger(1, 3);
printMessage("Chosen number: " + randomNumber);

anotherNumber = getRndInteger(11, 19);
printMessage("anotherNumber: " + anotherNumber);
