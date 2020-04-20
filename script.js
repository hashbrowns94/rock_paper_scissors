//make a function that randomly returns rock, paper, or scissors
let weapon = [ 'rock', 'paper', 'scissors' ];
let playerSelection = getUserWeapon();
let computerSelection = computerPlay();

function computerPlay() {
	return weapon[Math.floor(Math.random() * weapon.length)];
}

function getUserWeapon() {
	let playerSelection = prompt('rock, paper, scissors?');
	return playerSelection.toLowerCase();
}

//write a function that plays one round of rock paper scissors
function roundOne(playerSelection, computerSelection) {
	//get user input
	getUserWeapon();
	//get computer's weapon
	computerPlay();
}

roundOne();
