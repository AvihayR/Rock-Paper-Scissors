//computer object - stores array named choice with all pc's possibilities
let computer = {
    choice: ['rock','paper','scissors']
};

//getComputerChoice - a func that generates a random number, multiplies it by computer.choice length, and floors it to a round num
function getComputerChoice(){
    let randomChoice = Math.floor(Math.random() * computer.choice.length);
    console.log(computer.choice[randomChoice])
    return (computer.choice[randomChoice]);
}

//round - a func that takes two params - playerSelection & computerSelection,
    //prompts an input pop-up window for the user then converts input into lowerCase. 
    //checks to see who's the winner and returns the string that declare if player won or lost.
function round(playerSelection,computerSelection){
    playerSelection = prompt('Choose your weapon! (Rock,Paper or Scissors only.)').toLowerCase();
    computerSelection = getComputerChoice();
    switch(computerSelection){
        case 'rock':{
            if (playerSelection == 'rock'){return "It's a Tie! - Rock vs. Rock"}
            else if(playerSelection == 'paper'){return "You Win! - Paper beats Rock!"}
            else if(playerSelection == 'scissors'){return "You Lose! - Rock beats Scissors. "} 
            else{return "Error, not a valid input."}
            return
        };
        break;
        case 'paper':{
            if(playerSelection == 'rock'){return 'You Lose! - Paper beats Rock.'}
            else if(playerSelection == 'paper'){return "It's a Tie! - Paper vs. Paper"}
            else if(playerSelection == 'scissors'){return "You Win! - Scissors cuts Paper!"}
            else{return "Error, not a valid input."}
            return
        };
        break;
        case 'scissors':{
            if(playerSelection == 'rock'){return 'You win! - Rock breaks Scissors!'}
            else if(playerSelection == 'paper'){return 'You Lose! - Scissors cuts Paper.'}
            else if(playerSelection == 'scissors'){return "It's a Tie! - Scissors vs. Scissors"}
            else{return "Error, not a valid input."}
            return
        };
        break
        case null || undefined:{return 'Error!'};
    }
}

console.log(round());

