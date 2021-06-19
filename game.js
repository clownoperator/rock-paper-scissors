function computerPlay(){
let cpuNumber = Math.floor(Math.random() * 3);
console.log(cpuNumber);

switch (cpuNumber) {
  case 0:
   cpuSelection = "scissors";
   console.log(cpuSelection);
   break;
   case 1:
     cpuSelection = "paper";
     console.log(cpuSelection);
     break;
     case 2:
       cpuSelection = "rock";
       console.log(cpuSelection);
       break;           
}
} 
// cpuNumber 0 = 'scissors, 1 = 'paper', 2 = 'rock'

function playRound(cpuSelection, playerSelection){



}
  

