function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function showScore(score){
	clearMessages();
	document.getElementById('score').innerHTML = score;
}

function showSmallScore(score){
	clearMessages();
	document.getElementById('smallScore').innerHTML = score;
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}


// https://www.w3schools.com/js/js_random.asp
function getRndInteger(min, max) {
  return Math.floor(Math.random() * ((max + 1) - min) + min);
}
