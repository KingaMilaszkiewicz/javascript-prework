var computerMove, playerMove, randomNumber, buttonRock, buttonPaper, buttonScissors, argMoveId, argPlayerMove, argComputerMove, argButtonName;

 //////////////////////////////////////////////////////////////////////////////

buttonRock = document.getElementById("button-rock");
buttonRock.addEventListener("click", function(){ buttonClicked("1");});

buttonPaper = document.getElementById("button-paper");
buttonPaper.addEventListener("click", function(){ buttonClicked("2");});

buttonScissors = document.getElementById("button-scissors");
buttonScissors.addEventListener("click", function(){ buttonClicked("3");});

function buttonClicked(argButtonName) {
	console.log(argButtonName + " has been clicked.");
}

 //////////////////////////////////////////////////////////////////////////////

function getMoveName(argMoveId) {
	console.log("Called getMoveName function with argument: " + argMoveId);
	if (argMoveId == 1) {
		return "stone";
	} else if (argMoveId == 2) {
		return "paper";
	} else if (argMoveId == 3) {
		return "scissors";
	} else {
		printMessage("I don't know a move with id " + argMoveId + ". I am assuming you meant 'stone'.");
		return "stone";
	}
}

function displayResult(argPlayerMove, argComputerMove) {
	console.log("Called getMoveName function with arguments: " + argPlayerMove + ", " + argComputerMove);
	if (argPlayerMove == argComputerMove) {
		printMessage("Draw!")
	} else if (argPlayerMove == "stone" && argComputerMove == "scissors" || argPlayerMove == "paper" && argComputerMove == "stone" || argPlayerMove == "scissors" && argComputerMove == "paper") {
		printMessage("You won!");
	} else {
		printMessage("You lost :(")
	}
	printMessage("I played " + argComputerMove + " and you played " + argPlayerMove + ".");
}

 //////////////////////////////////////////////////////////////////////////////

playerMove = getMoveName(argButtonName);
console.log("Player move is " + playerMove);
randomNumber = getRndInteger(1, 3);
console.log("Random number is " + randomNumber);
computerMove = getMoveName(randomNumber);
console.log("Computer move is " + computerMove);


displayResult(playerMove, computerMove);
