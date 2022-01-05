let rock
let paper
let scissors



function computerPlay(){
    if(rock){
        return console.log("Rock");
    }
    else if(paper){
        return console.log("Paper");
    }

    else if(scissors){
        return console.log("Scissors");
    }
    else{
        return console.log("Nothing Selected")
    }
    
}

computerPlay()