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

// Declare player score
let humanScore =0;
let computerScore =0;

//play a single round
function playRound(humanChoice,computerChoice) {

    // computerChoice = getComputerChoice();
    // humanChoice = getHumanChoice;
    console.log(`Player:${humanChoice} Computer: ${computerChoice}`);

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
    
    div.textContent = `Player'score:${humanScore} Computer's score: ${computerScore}`;
    if (humanScore===5 && computerScore < 5){
        alert("Congratulation, You are the champion!");
    }
    else if (computerScore === 5 && humanScore < 5){
        alert("The computer won this round");
    }
    if(humanScore === 5 || computerScore===5){
        let askPlayer = prompt("Do you want to restart?, Y/N").toUpperCase();
        if (askPlayer === "Y")  {
            humanScore = 0;
            computerScore = 0;
        }
        else {
            alert("Game Over!")
        }
    }
    return value;
}



getHumanChoice =  (event) =>{
    let target = event.target;
    let humanChoice = null;

    switch(target.id) {
        case 'rock':
            humanChoice = 'rock';
            break;
        case 'paper':
            humanChoice = 'paper';
            break;
        case 'scissors':
            humanChoice = 'scissors';
            break;
    }
    if(humanChoice) {
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice,computerChoice);
        alert(result);
    }
}
let buttonAction = document.querySelector('#buttonAction');
buttonAction.addEventListener('click', getHumanChoice);

const body = document.querySelector('body');
const div = document.createElement('div');

body.appendChild(div);
document.body.insertBefore(div, document.body.firstChild)
