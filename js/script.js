var computerMove, playerMove, randomNumber;

playerInput = prompt("Choose your turn! 1: stone, 2: paper, 3: scissors.");
console.log ("Player choice is " + playerInput);
playerMove = getMoveName(playerInput);
console.log("Player move is " + playerMove);
randomNumber = getRndInteger(1, 3);
console.log("Random number is " + randomNumber);
computerMove = getMoveName(randomNumber);
console.log("Computer move is " + computerMove);

displayResult(playerMove, computerMove);
