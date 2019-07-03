let compScore = 0;
let playerScore = 0;

//function that allows computer to 'play'
function compPlay()
{
    const options = ["rock", "paper", "scissors"];
    const compChoose = options[Math.floor(Math.random() * options.length)];
    return compChoose;
}

//play round, return score
function playRound(playerChoice, compChoice)
{
    switch (true)
    {
        case playerChoice === "rock" && compChoice === "paper":
            console.log("Computer Wins! Paper wraps Rock");
            return 0;
        case playerChoice === "rock" && compChoice === "scissors":
            console.log("You Win! Rock smashes Scissors");
            return 1;
        case playerChoice === "rock" && compChoice === "rock":
            console.log("Draw!");
            break;
        case playerChoice === "paper" && compChoice === "scissors":
            console.log("Computer Wins! Scissors cut Paper");
            return 0;
        case playerChoice === "paper" && compChoice === "rock":
             console.log("You Win! Paper wraps Rock");
            return 1;
        case playerChoice === "paper" && compChoice === "paper":
            console.log("Draw!");
            break;
        case playerChoice === "scissors" && compChoice === "rock":
            console.log("Computer Wins! Rock smashes Scissors");
            return 0;
        case playerChoice === "scissors" && compChoice === "paper":
            console.log("You Win! Scissors cut Paper");
            return 1;
        case playerChoice === "scissors" && compChoice === "scissors":
            console.log("Draw!");
            break;
        default:
            console.log("Option Invalid. Try Again");
    }
}

//play five rounds and keep score
function game()
{
    for(var i = 0; i < 5; i++)
    {
        let beginGame = prompt("Rock, Paper, Scissors?");
        let playerChoice = beginGame.toLowerCase();
        let compChoice = compPlay();

        console.log("Player: " + playerChoice);
        console.log("Computer: " + compChoice);

        let result = playRound(playerChoice, compChoice);

        if(result === 0)
        {
            compScore++;
            console.log("Computer: " + compScore);
        }
        else if(result === 1)
        {
            playerScore++;
            console.log("Player: " + playerScore);
        }
        else
        {
            console.log("No Scores Acheived");
        }
    }
}

//declare winner after five rounds
function winner()
{
    if(playerScore > compScore)
    {
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + compScore);
        console.log("You Win The Game!");
    }
    else if(compScore > playerScore)
    {
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + compScore);
        console.log("Computer Wins The Game!");
    }
    else
    {
        console.log("Game Tied!");
    }
}

game();
winner();