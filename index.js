let rock
let paper
let scissors



let randomNum= Math.floor(Math.random() * 3)

console.log(randomNum)


function computerPlay(randomNum){
    if(randomNum==0){
        return console.log("Rock");
    }
    else if(randomNum==1){
        return console.log("Paper");
    }

    else if(randomNum==2){
        return console.log("Scissors");
    }
    else{
        return console.log("Nothing Selected")
    }
    
}

computerPlay(randomNum)