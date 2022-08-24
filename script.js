let computer = {
    choice: ['rock','paper','scissors']
};


function getComputerChoice(){
    let computersChoice = Math.floor(Math.random() * computer.choice.length);
    console.log(computer.choice[computersChoice])
}

getComputerChoice()