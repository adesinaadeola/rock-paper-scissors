const game = ['rock', 'paper', 'scissors'];

// get computer choice
function getComputerChoice(){
    min = 0;
    max=2;
    const maxFloor = Math.floor(max);
    const minCeil = Math.ceil(min);
    let value = Math.floor(Math.random() * (maxFloor - minCeil + 1) + minCeil);
    return game[value];
}

// get the player choice
function getHumanChoice() {
    let choice = prompt("Select rock, scissors, or paper");
    if (choice===null) {
        choice = null;
    } else {
        choice = choice.toLowerCase().trim();
    return choice;
}}


// Declare player score
let humanScore =0;
let computerScore =0;

//play a single round
function playRound(humanChoice, computerChoice) {

    let value;
    if (humanChoice===null) {
        value = "Game canceled by player!";
    }
    else if (computerChoice === humanChoice) {
        value = "It is a draw!";
    }
    else if (humanChoice ==="rock" && computerChoice ==="scissors" || 
        humanChoice === "scissors" && computerChoice === "paper" || 
        humanChoice === "paper" && computerChoice === "rock") {
        humanScore +=1;
        value = "You win this round!";
    }
    else {
        computerScore +=1;
        value = "You lose this round";
    };
    return value;
}


// Play numberOfPlay rounds
function playGame (numberOfPlay) {
    while (numberOfPlay>0) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        console.log(`Player:${humanChoice} Computer: ${computerChoice}`);
        console.log(playRound(humanChoice,computerChoice));
        numberOfPlay -=1;
    }
    if (numberOfPlay === 0) {
        let askPlayer = prompt("Do you want to restart?, Y/N").toUpperCase();
        if (askPlayer === "Y")  {
            numberOfPlay = 5;
        }
        else {
            console.log("Game Over!")
        }
        }
        return `You have ${numberOfPlay} lives left!`;
}


console.log(playGame(5));
