//computer object - stores array named choice with all pc's possibilities
let computer = {
    choice: ['rock','paper','scissors']
};

//getComputerChoice - a func that generates a random number, multiplies it by computer.choice length, and floors it to a round int
function getComputerChoice(){
    let randomChoice = Math.floor(Math.random() * computer.choice.length);
    console.log(`Computer's choice: ${computer.choice[randomChoice]}`)
    return (computer.choice[randomChoice]);
}

//playRound - a func that takes two params - playerSelection & computerSelection,
    //prompts an input pop-up window for the user then converts input into lowerCase. 
    //checks to see who's the winner and returns the string that declare if player won or lost.
function playRound(playerSelection,computerSelection){
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
            if(playerSelection == 'rock'){return 'You Win! - Rock breaks Scissors!'}
            else if(playerSelection == 'paper'){return 'You Lose! - Scissors cuts Paper.'}
            else if(playerSelection == 'scissors'){return "It's a Tie! - Scissors vs. Scissors"}
            else{return "Error, not a valid input."}
            return
        };
        break
        case null || undefined:{return 'Error!'};
    }
}


//game() func - first creates an object with two vars set to 0's,
//then creates a for loop, with a counter to run 5 times, that for loop body contains:
//var that holds the values that comes back from playRound() func, 
//then determines which var in score object to score, checking via str.includes() built-in func, 
//ex: if includes('win'){++score.player}


function game(){
    let score = {
        player: 0 ,
        computer: 0
    };
    for(let count = 0; count < 5; count++){

        let round = playRound()
        console.log(round)

        if(round.includes('Win')){++score.player}
        else if(round.includes('Lose')){++score.computer}
        else if(round.includes('Tie')){++score.computer 
            ++score.player};

        console.log(score)
    }
    };


game()



