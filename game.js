function computerPlay(){
let array = ["scissors", "paper", "rock"];
let computerSelection = array[Math.floor(Math.random()*3)];
return computerSelection;
} 

function playRound(playerSelection, computerSelection){

switch (playerSelection){
case 'scissors':
  if (computerSelection == 'paper')
    return 'Winner!';
  else if (computerSelection == 'rock')
  return 'You Lost';
  else 
  return 'Tie!'

case 'paper':
  if (computerSelection == 'rock')
  return 'Winner!';
  else if (computerSelection == 'scissors')
  return 'You Lost';
  else 
  return 'Tie'

case 'rock':
  if (computerSelection == 'scissors')
  return 'Winner!';
  else if (computerSelection == 'paper')
  return 'You Lost';
  else 
  return 'Tie'

}

}
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
function game(){


// for (let i = 0; i < 5; i++) playRound(i);

}
let game = function() {
let computerTally = 0;
let playerTally = 0;

for (let i =0; i < 5; i++) {
let playerSelection = window.prompt('Type Scissors, Paper or Rock');
switch (playRound(computerPlay(), playerSelection)){
  case 'Winner!':
  playerTally++;
  break;
  case 'You Lost':
  computerTally++;
  break;
}
if (computerTally > playerTally) {
  console.log('You Lost!');
}
else if (computerTally < playerTally) {
  console.log('You Won!');
}
else {
  console.log('It is a Tie');
}
}
}
console.log(game());
