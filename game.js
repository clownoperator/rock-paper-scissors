function computerPlay(){
let array = ["scissors", "paper", "rock"];
computerSelection = 
array[Math.floor(Math.random()*3)];
return computerSelection;
} 
function playRound(playerSelection, computerSelection){
  var result;
switch (playerSelection){
  case 'scissors' || 'paper' || 'rock':
   if ((playerSelection == 'scissors' && computerSelection == 'paper') ||
  (playerSelection == 'paper' && computerSelection == 'rock') ||
  (playerSelection == 'rock' && computerSelection == 'scissors'));
  result = 'You Win! you played {playerSelection} and computer played {computerSelection}';
  break;

  case 'scissors' || 'paper' || 'rock':
   if ((playerSelection == 'scissors' && computerSelection == 'scissors') ||
  (playerSelection == 'paper' && computerSelection == 'paper') ||
  (playerSelection == 'rock' && computerSelection == 'rock'));
  result = 'Tie! You played {playerSelection} and computer played {computerSelection}';
  break;

  default:
  result = 'You Lose! You played {playerSelection} and computer played {computerSelection}'; 
  break;

}
          

}
const playerSelection = "rock";
const cpuSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection)); 