let weapon = [ 'rock', 'paper', 'scissors' ];
let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;
let rock = document.querySelectorAll('#rock');
let paper = document.querySelectorAll('#paper');
let scissors = document.querySelectorAll('#scissors');
const buttons = document.querySelectorAll('button');
let playerSelection = "";

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		playerSelection = e.target.innerHTML;
		roundOne(playerSelection, computerPlay());
	})
})

function computerPlay() {
	return weapon[Math.floor(Math.random() * weapon.length)];
}


function roundOne(playerSelection, computerSelection) {
	alert("computer plays " + computerSelection);
	if (
		(playerSelection == 'rock' && computerSelection == 'paper') ||
		(playerSelection == 'paper' && computerSelection == 'scissors') ||
		(playerSelection == 'scissors' && computerSelection == 'rock')
	) {
		computerScore++;
		return alert(`You lose! ${computerSelection} beats ${playerSelection}`);
	} else if (playerSelection == computerSelection) {
		return alert(`DRAW! Computer also chose ${computerSelection}`);
	} else {
		playerScore++;
		return alert('Winner!');
	}
}
