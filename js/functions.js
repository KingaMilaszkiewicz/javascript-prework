function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

// my functions

var argMoveId, argPlayerMove, argComputerMove;

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

// https://www.w3schools.com/js/js_random.asp
function getRndInteger(min, max) {
  return Math.floor(Math.random() * ((max + 1) - min) + min);
}
