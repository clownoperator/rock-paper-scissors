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

function playRound(cpuSelection, playerSelection) {
switch (cpuSelection) {
case cpuSelection == playerSelection:
text = "Tie";
break;
case (cpuSelection = "scissors") && (playerSelection = "paper"):
text = "scissors cut paper";
break;
case (cpuSelection = "scissors") && (playerSelection = "rock"):
text = "rock crushes scissors";
break;
case (cpuSelection = "paper") && (playerSelection = "scissors"):





  

 }

 }
      



  





 const playerSelection = "";
 const cpuSelection = computerPlay();
 console.log(playRound(cpuSelection, playerSelection));

