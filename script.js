//UI: 
const scorePara = document.querySelector(".score-p");
const choicePara = document.querySelector(".choices-p");
const buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
    btn.addEventListener('click', playRound);
});


//computer object - stores array named choice with all pc's possibilities
let computer = {
    choice: ['rock','paper','scissors']
};

//getComputerChoice - a func that generates a random number, multiplies it by computer.choice length, and floors it to a round int
function getComputerChoice(){
    let randomChoice = Math.floor(Math.random() * computer.choice.length);
    return (computer.choice[randomChoice]);
}

let score = {
    player: 0 ,
    computer: 0,
    round: 0
};

function counter(num){
    if(num > 5) {
        buttons.forEach(btn => {
            btn.removeEventListener('click',playRound);
        })
    }};

function playRound(playerSelection,computerSelection){
    ++score.round
    playerSelection = this.value;
    computerSelection = getComputerChoice();
    switch(computerSelection){
        case 'rock':{
            if (playerSelection == 'rock'){ "It's a Tie! - Rock vs. Rock"}
            else if(playerSelection == 'paper'){ ++score.player}
            else if(playerSelection == 'scissors'){ ++score.computer} 
            else{ "Error, not a valid input."}
            
        };
        break;
        case 'paper':{
            if(playerSelection == 'rock'){ ++score.computer}
            else if(playerSelection == 'paper'){ "It's a Tie! - Paper vs. Paper"}
            else if(playerSelection == 'scissors'){ ++score.player}
            else{return "Error, not a valid input."}
        };
        break;
        case 'scissors':{
            if(playerSelection == 'rock'){ ++score.player}
            else if(playerSelection == 'paper'){ ++score.computer}
            else if(playerSelection == 'scissors'){ "It's a Tie! - Scissors vs. Scissors"}
            else{return "Error, not a valid input."}
        };
        break
        case null || undefined:{'Error!'};
    }; 
    choicePara.textContent = `${playerSelection.toUpperCase()}` + ' vs. '+ `${computerSelection.toUpperCase()}`;
    scorePara.textContent = `Your Score: ${score.player}` + " " + `Computer's score: ${score.computer}`;
    counter(score.round);
};
