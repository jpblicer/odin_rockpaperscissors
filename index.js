
/* 
Make playerSelection function caseinsensitive
Play a 5 round game with scores being kept
*/

let randomNum= Math.floor(Math.random() * 3)
let computerSelection = computerPlay(randomNum)
let playerSelection = "Scissors".toLowerCase()

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
        return "Tie"
    }
    else if(playerSelection==="rock" && computerSelection==="paper"){
        return "Computer picked Paper. You Lose."
    }
    else if(playerSelection==="rock" && computerSelection==="scissors"){
        return "Computer picked Scissors. You Win!"
    }    
    else if(playerSelection==="paper" && computerSelection==="rock"){
        return "Computer picked Rock. You Win!"
    }
    else if(playerSelection==="paper" && computerSelection==="scissors"){
        return "Computer picked Scissors. You Lose."
    }  
    else if(playerSelection==="scissors" && computerSelection==="rock"){
        return "Computer picked Rock. You Lose."
    }  
    else if(playerSelection==="scissors" && computerSelection==="paper"){
        return "Computer picked Paper. You Win!"
    } 
}



console.log(playRound(playerSelection, computerSelection))