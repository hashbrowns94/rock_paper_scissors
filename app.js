//make a function that randomly returns rock, paper, or scissors
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

//write a function that plays one round of rock paper scissors
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





/*write a function that plays 5 rounds
function game(numRounds) {
	for (let i = 0; i < numRounds; i++) {
		let playerSelection = prompt('choose rock, paper, or scissors').toLowerCase();
		let computerSelection = computerPlay();
		console.log(`round ${i + 1}: `, roundOne(playerSelection, computerSelection));
		console.log(playerScore);
		console.log(computerScore);
		//display winner or loser
		if (playerScore === 3) {
			console.log(playerScore);
			console.log(computerScore);
			console.log('You win!');
		} else if (computerScore === 3) {
			console.log(playerScore);
			console.log(computerScore);
			console.log('You lose');
		}
	}
}

console.log(game(5));
//console.log(roundOne(playerSelection, computerSelection));
*/