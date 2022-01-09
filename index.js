
/* 
Make playerSelection function caseinsensitive
Play a 5 round game with scores being kept
*/

let randomNum= Math.floor(Math.random() * 3)
let computerSelection = computerPlay(randomNum)
let playerSelection = "Scissors"

function computerPlay(randomNum){
    if(randomNum==0){
        return "Rock";
    }
    else if(randomNum==1){
        return "Paper";
    }

    else if(randomNum==2){
        return "Scissors";
    }
    else{
        return "Nothing Selected"
    }
    
}





function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "Tie"
    }
    else if(playerSelection==="Rock" && computerSelection==="Paper"){
        return "Computer picked Paper. You Lose."
    }
    else if(playerSelection==="Rock" && computerSelection==="Scissors"){
        return "Computer picked Scissors. You Win!"
    }    
    else if(playerSelection==="Paper" && computerSelection==="Rock"){
        return "Computer picked Rock. You Win!"
    }
    else if(playerSelection==="Paper" && computerSelection==="Scissors"){
        return "Computer picked Scissors. You Lose."
    }  
    else if(playerSelection==="Scissors" && computerSelection==="Rock"){
        return "Computer picked Rock. You Lose."
    }  
    else if(playerSelection==="Scissors" && computerSelection==="Paper"){
        return "Computer picked Paper. You Win!"
    } 
}



console.log(playRound(playerSelection, computerSelection))