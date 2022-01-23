
let computerSelection = computerPlay;


function computerPlay() { 
    const choices = ['rock', 'paper', 'scissors'] 
    return choices[Math.floor(Math.random() * choices.length)];
} 


let playerScore = 0;
let computerScore = 0;

//let playerSelection = "rock".toLowerCase();
let playerSelection = prompt("Will you choose Rock, Paper or Scissors?");
if (playerSelection) {
    let playerPick = playerSelection.toLowerCase();
    if (playerPick === "rock" || playerPick === "paper" || playerPick === "scissors"){}
}   else {
    alert("invalid selection noob. Git Gud");
}



function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "It is a tie"
    }
    else if(playerSelection==="rock" && computerSelection==="paper"){
        computerScore++;
        return "Computer picked Paper. You Lose."
    }
    else if(playerSelection==="rock" && computerSelection==="scissors"){
        playerScore++;
        return "Computer picked Scissors. You Win!"
    }    
    else if(playerSelection==="paper" && computerSelection==="rock"){
        playerScore++;
        return "Computer picked Rock. You Win!"
    }
    else if(playerSelection==="paper" && computerSelection==="scissors"){
        computerScore++;
        return "Computer picked Scissors. You Lose."
    }  
    else if(playerSelection==="scissors" && computerSelection==="rock"){
        computerScore++;
        return "Computer picked Rock. You Lose."
    }  
    else if(playerSelection==="scissors" && computerSelection==="paper"){
        playerScore++;
        return "Computer picked Paper. You Win!"
    }
    else{
        return "what";
    }
 }
    

console.log(playRound(playerSelection, computerPlay()))
console.log(playRound(playerSelection, computerPlay()))
console.log(playRound(playerSelection, computerPlay()))
console.log(playRound(playerSelection, computerPlay()))
console.log(playRound(playerSelection, computerPlay()))
console.log(playerScore, computerScore)



function result(playerScore, computerScore){
    if(playerScore > computerScore){
        return "You win!";
    }
    if(playerScore < computerScore){
        return "Computer wins!"
    }
    else {
        return "It is a tie!"
    }
}

console.log(result(playerScore, computerScore))