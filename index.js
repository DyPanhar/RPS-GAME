

const randomSel = ["Rock" , "Paper" , "Scissors"];
const displayPlayer = document.getElementById('displayPlayer');
const displayComputer = document.getElementById('displayComputer');
const displayResult = document.getElementById('displayResult');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');

let playerScore= 0;
let computerScore= 0;

function play(playerChoice){
    
    const computerChoice = randomSel[Math.floor(Math.random() * 3)];
    console.log(computerChoice);

    let result = "";

    if(playerChoice === computerChoice){
        result = "WE'RE TIE";
        displayResult.textContent = result;
    }
    else{
        switch(playerChoice){
            case "Rock":
                result = (computerChoice ===  "Scissors") ? "YOU WON" : "YOU LOSE";
                break;
            case "Paper":
                result =  (computerChoice ===  "Rock") ? "YOU WON" : "YOU LOSE";
                break;
            case  "Scissors":
                 result = (computerChoice ===  "Paper") ? "YOU WON" : "YOU LOSE";
                break;
        }
      
    }
    displayResult.textContent = result;
    displayComputer.textContent = `COMPUTER : ${computerChoice}` ;
    displayPlayer.textContent = `PLAYER : ${playerChoice}` ;
    displayResult.classList.remove("greenText" , "redText");
    if(result ===  "YOU WON" ){
        playerScore++;
        displayResult.classList.add("greenText");
        playerScoreDisplay.textContent =  playerScore;
    }
    else if(result === "YOU LOSE" ){
        computerScore++;
        displayResult.classList.add("redText");
        computerScoreDisplay.textContent =   computerScore;
    }

    
}