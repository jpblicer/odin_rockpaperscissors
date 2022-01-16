let randomNum= Math.floor(Math.random() * 3)
let computerSelection = computerPlay(randomNum)


let playerScore = parseInt(0);
let computerScore = parseInt(0);


function computerPlay(randomNum){
    if(randomNum==0){
        return "rock";
    }
    else if(randomNum==1){
        return "paper";
    }

    else if(randomNum==2){
        return "scissors";
    }
    else{
        return "Nothing Selected"
    }
    
}





function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        computerScore++;
        playerScore++;
        return "Tie"
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
}

function gameResult(playerScore, computerScore){
    if (playerScore > computerScore)
    return "You win with " ,playerScore, " Points!";
    else if (playerScore < computerScore){
    return "You Lost. Computer Got " ,computerScore, " Points!";
    }
    else {
        return "It is a Tie!"
    }
}

console.log(playRound("rock".toLowerCase(), computerSelection))
console.log(playRound("paper".toLowerCase(), computerSelection))
console.log(playRound("scissors".toLowerCase(), computerSelection))
console.log(playRound("scissors".toLowerCase(), computerSelection))
console.log(playRound("rock".toLowerCase(), computerSelection))

console.log(playerScore)
console.log(computerScore)
console.log(gameResult(playRound))


