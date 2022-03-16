let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;
let playerSelection = "rock";


function computerPlay() { 
    const choices = ['rock', 'paper', 'scissors'] 
    return choices[Math.floor(Math.random() * choices.length)];
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



 

function result(){
    if(playerScore > computerScore){
        return "You win!";
    }
    if(playerScore < computerScore){
        return "Computer wins!";
    }
    else {
        return "It is a tie!";
    }
}
console.log(playRound(playerSelection, computerSelection))    
console.log(result(playerScore, computerScore))