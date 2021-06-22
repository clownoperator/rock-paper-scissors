function computerPlay(){
let array = ["scissors", "paper", "rock"];
computerSelection = 
array[Math.floor(Math.random()*3)];
console.log(computerSelection);
} 
function playRound(playerSelection, computerSelection){
switch (playerSelection){
  case ((playerSelection == 'scissors' && computerSelection == 'paper') ||
  (playerSelection == 'paper' && computerSelection == 'rock') ||
  (playerSelection == 'rock' && computerSelection == 'scissors')):
}
}
const playerSelection = "rock";
const cpuSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));             
