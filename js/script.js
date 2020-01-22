let computerWins = 0, playerWins = 0, computerPoints = 0, playerPoints = 0,
computerMove, playerMove, randomNumber;

 //////////////////////////////////////////////////////////////////////////////

const buttonRock = document.getElementById("button-rock");
buttonRock.addEventListener("click", function(){ buttonClicked("1");});

const buttonPaper = document.getElementById("button-paper");
buttonPaper.addEventListener("click", function(){ buttonClicked("2");});

const buttonScissors = document.getElementById("button-scissors");
buttonScissors.addEventListener("click", function(){ buttonClicked("3");});

const buttonReset = document.getElementById("button-reset");
buttonReset.addEventListener("click", function(){ buttonClicked("reset");});

showScore(playerWins + " : " + computerWins);
showSmallScore(playerPoints + " : " + computerPoints);

function resetScore(){
	computerPoints = 0;
	playerPoints = 0;
}

function buttonClicked(argButtonName) {
	if (argButtonName == "reset"){
		clearMessages();
		resetScore();
		showSmallScore(playerPoints + " : " + computerPoints);
	} else {
		clearMessages();
		console.log(argButtonName + " has been clicked.");

		playerMove = getMoveName(argButtonName);
		console.log("Player move is " + playerMove);
		randomNumber = getRndInteger(1, 3);
		console.log("Random number is " + randomNumber);
		computerMove = getMoveName(randomNumber);
		console.log("Computer move is " + computerMove);

		displayResult(playerMove, computerMove);

		if(computerPoints == 3){
			++computerWins;
			showScore(playerWins + " : " + computerWins);
			resetScore();
			printMessage("You lost! Click any button to continue.");
		} else if (playerPoints == 3) {
			++playerWins;
			showScore(playerWins + " : " + computerWins);
			resetScore();
			printMessage("You won! Click any button to continue.");
		}
	}
}

 //////////////////////////////////////////////////////////////////////////////

function getMoveName(argMoveId) {
	console.log("Called getMoveName function with argument: " + argMoveId);
	if (argMoveId == 1) {
		return "rock";
	} else if (argMoveId == 2) {
		return "paper";
	} else if (argMoveId == 3) {
		return "scissors";
	} else {
		printMessage("I don't know a move with id " + argMoveId + ". I am assuming you meant 'rock'.");
		return "rock";
	}
}

function displayResult(argPlayerMove, argComputerMove) {
	console.log("Called getMoveName function with arguments: " + argPlayerMove + ", " + argComputerMove);
	if (argPlayerMove == argComputerMove) {
		showSmallScore(playerPoints + " : " + computerPoints);
		printMessage("Draw!")
	} else if (argPlayerMove == "rock" && argComputerMove == "scissors" || argPlayerMove == "paper" && argComputerMove == "rock" || argPlayerMove == "scissors" && argComputerMove == "paper") {
		++playerPoints;
		showSmallScore(playerPoints + " : " + computerPoints);
		printMessage("You won this turn!");
	} else {
		++computerPoints;
		showSmallScore(playerPoints + " : " + computerPoints);
		printMessage("You lost this turn :(");
	}
	printMessage("I played " + argComputerMove + " and you played " + argPlayerMove + ".");
}

 //////////////////////////////////////////////////////////////////////////////
