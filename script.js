
game();

function computerPlay()
{
    let number = 3;
    let compTurn = Math.floor(Math.random() * number);
    return compTurn;
    //sccisors 0 rock 1 paper 2
}

function playRound(playerSelection, computerSelection)
{
    //rock cases
    if (playerSelection == "rock" && computerSelection == 1)
    {   
        return "Tie!!!";
    }
    else if (playerSelection == "rock" && computerSelection == 0)  
    {
        return "You won!!!!! Rock beats scissors";
    }
    else if (playerSelection == "rock" && computerSelection == 2)
    {
        return "You lose!! Paper beats rock";
    }
    //paper cases
    else if (playerSelection == "paper" && computerSelection == 1)  
    {
        return "You won!!!!! Paper beats rock";
    }
    else if (playerSelection == "paper" && computerSelection == 0)
    {

        return "You lose!! Scissors beats paper";
    }
    else if (playerSelection == "paper" && computerSelection == 2)  
    {
        return "Tie!!!";
    }
    //scissor cases
    else if (playerSelection == "scissors" && computerSelection === 2)
    {
        let str = "You won!!!!! Scissors beats paper";
        return str;
    }
    else if (playerSelection == "scissors" && computerSelection === 0)
    {
        let str = "Tie!!!";
        return str;
    }
    else if (playerSelection == "scissors" && computerSelection === 1)
    {
        let str = "You lose!! Rock beats scissors";
        return str;
    }
}

function game()
{
    let cpScore = 0, pScore = 0;  

    for(let i = 0; i < 5; i++)
    {
        let playerSelection = promptPlayer();
        let computerSelection = computerPlay();
        let message = playRound(playerSelection, computerSelection)
        console.log(message);
        if (message == "You lose!! Rock beats scissors" || message == "You lose!! Scissors beats paper" || message == "You lose!! Paper beats rock")
        {
            cpScore++;
        }
        else if (message == "You won!!!!! Scissors beats paper" || message == "You won!!!!! Paper beats rock" || message == "You won!!!!! Rock beats scissors")
        {
            pScore++;
        }
    }

    if(cpScore > pScore)
    {
        console.log("You lost");
    }
    else if (pScore > cpScore)
    {
        console.log("You won");
    }
    else
    {
        console.log("Tie");
    }
}

function promptPlayer()
{
    let playerSelection = prompt("Enter your choice: ")
    if (playerSelection == null)
    {
        console.log("you entered an invalid choice");
    }
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}