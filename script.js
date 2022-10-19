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

let isEndOfGame = false;

function counter(num1,num2){
    if(num1 >= 5 || num2 >= 5) {
        buttons.forEach(btn => {
            btn.removeEventListener('click',playRound);
        return isEndOfGame = true;
    })
    }};

function determineWin(v){
    if (v == true){
        if(score.player > score.computer){
            alert('You win!🎉')}
            else if(score.player < score.computer){
                alert('You lose, Better luck next time!🤞')
            }
    };
};

function playRound(playerSelection,computerSelection){
    ++score.round
    playerSelection = this.value;
    computerSelection = getComputerChoice();
    switch(computerSelection){
        case 'rock':{
            if (playerSelection == 'rock'){ choicePara.textContent = "It's a tie! - Rock vs. Rock.. 😐"}
            else if(playerSelection == 'paper'){ ++score.player , choicePara.textContent = "You win! Paper wraps Rock! 💪"}
            else if(playerSelection == 'scissors'){ ++score.computer, choicePara.textContent = "You lose! Rock breaks Scissors. 😭"} 
            else{ "Error, not a valid input."}
            
        };
        break;
        case 'paper':{
            if(playerSelection == 'rock'){ ++score.computer,choicePara.textContent = "You lose! Paper wraps Rock. 😭"}
            else if(playerSelection == 'paper'){ choicePara.textContent = "It's a tie! - Paper vs. Paper.. 😐"}
            else if(playerSelection == 'scissors'){ ++score.player, choicePara.textContent = "You win! Scissors snips Paper! 💪"}
            else{return "Error, not a valid input."}
        };
        break;
        case 'scissors':{
            if(playerSelection == 'rock'){ ++score.player, choicePara.textContent = "You win! Rock breaks Scissors! 💪"}
            else if(playerSelection == 'paper'){ ++score.computer, choicePara.textContent = "You lose! Scissors snips Paper. 😭"}
            else if(playerSelection == 'scissors'){ choicePara.textContent = "It's a Tie! - Scissors vs. Scissors.. 😐"}
            else{return "Error, not a valid input."}
        };
        break
        case null || undefined:{'Error!'};
    }; 
    //choicePara.textContent = `${playerSelection.toUpperCase()}` + ' vs. '+ `${computerSelection.toUpperCase()}`;
    scorePara.textContent = `Your Score: ${score.player}` + " " + `Computer's score: ${score.computer}`;
    counter(score.computer,score.player);
    determineWin(isEndOfGame);
};
