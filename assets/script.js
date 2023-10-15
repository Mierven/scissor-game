const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultDiv = document.getElementById("result");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");

rockBtn.addEventListener("click", function () {
    playRound("rock");
});

paperBtn.addEventListener("click", function () {
    playRound("paper");
});

scissorsBtn.addEventListener("click", function () {
    playRound("scissors");
});


function playRound(playerChoice) {

    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];


    if (playerChoice === computerChoice) {
        resultDiv.textContent = "It's a tie!";


    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        resultDiv.textContent = "You win!";
    } else {
        resultDiv.textContent = "You lose!";
    }
}