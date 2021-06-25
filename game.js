function computerPlay(){
let array = ["scissors", "paper", "rock"];
computerSelection = 
array[Math.floor(Math.random()*3)];
return computerSelection;
} 
function playRound(playerSelection, computerSelection){

switch (playerSelection){
case 'scissors':
  if (computerSelection == 'paper')
  return "Winner!";
  else if (computerSelection == 'rock')
  return "You Lose";
  else 
  return 'Tie!'

case 'paper':
  if (computerSelection == 'rock')
  return "Winner!";
  else if (computerSelection == 'scissors')
  return "You Lose";
  else 
  return "Tie"

case 'rock':
  if (computerSelection == 'scissors')
  return "Winner!";
  else if (computerSelection == 'paper')
  return "You Lose";
  else 
  return "Tie"

}
}


const playerInput = "PAPER";
const playerSelection = playerInput.toLowerCase();
const cpuSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection)); 

function game(){

}