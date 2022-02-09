let pWins = 0;
let cWins = 0;
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const results = document.querySelector('.results');
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
let imageComputer = document.querySelector(".computer-selection");
let imagePlayer = document.querySelector(".player-selection");

player.textContent = pWins;
computer.textContent = cWins;
rock.addEventListener('click', function(){
    let msg1 =  playRound("rock", computerPlay());
    results.textContent = msg1;
    if (msg1 == "You won!!!!! Rock beats scissors" && pWins < 5 && cWins < 5) 
    {
        pWins++;
        player.textContent = pWins;
        imagePlayer.src="https://i.ytimg.com/vi/NtT5oizOFiY/maxresdefault.jpg";
        imageComputer.src="https://www.clipartmax.com/png/middle/289-2890339_black-scissors-office-drawing-open-sketch-scissors-drawing.png";
    }
    else if (msg1 == "You lose!! Paper beats rock" && pWins < 5 && cWins < 5)
    {
        cWins++;
        computer.textContent = cWins;
        imagePlayer.src="https://i.ytimg.com/vi/NtT5oizOFiY/maxresdefault.jpg";
        imageComputer.src="https://previews.123rf.com/images/taesmileland/taesmileland1210/taesmileland121000034/15741972-%EB%85%B8%ED%8A%B8%EB%B6%81-%EC%9A%A9%EC%A7%80-%EB%8F%84%EB%A9%B4.jpg";
    }
    else if (msg1 == "Tie!!! ROCK = ROCK" && pWins < 5 && cWins < 5)
    {
        imagePlayer.src="https://i.ytimg.com/vi/NtT5oizOFiY/maxresdefault.jpg";
        imageComputer.src="https://i.ytimg.com/vi/NtT5oizOFiY/maxresdefault.jpg";
    }
    if (pWins == 5)
    {
        results.textContent = "YOU BEAT THE COMPUTER Mr/Ms LOVELACE";
    }
    else if (cWins == 5)
    {
        results.textContent = "It's a sad day for humans";
    }
}); 
paper.addEventListener('click', function(){
    let msg2 = playRound("paper", computerPlay());
    results.textContent = msg2;
    if (msg2 == "You won!!!!! Paper beats rock" && pWins < 5 && cWins < 5)
    {
        pWins++;
        player.textContent = pWins;
        imageComputer.src="https://i.ytimg.com/vi/NtT5oizOFiY/maxresdefault.jpg";
        imagePlayer.src="https://previews.123rf.com/images/taesmileland/taesmileland1210/taesmileland121000034/15741972-%EB%85%B8%ED%8A%B8%EB%B6%81-%EC%9A%A9%EC%A7%80-%EB%8F%84%EB%A9%B4.jpg";
    }
    else if (msg2 == "You lose!! Scissors beats paper" && pWins < 5 && cWins < 5)
    {
        cWins++;
        computer.textContent = cWins;
        imagePlayer.src="https://previews.123rf.com/images/taesmileland/taesmileland1210/taesmileland121000034/15741972-%EB%85%B8%ED%8A%B8%EB%B6%81-%EC%9A%A9%EC%A7%80-%EB%8F%84%EB%A9%B4.jpg";
        imageComputer.src="https://www.clipartmax.com/png/middle/289-2890339_black-scissors-office-drawing-open-sketch-scissors-drawing.png";
    }
    else if (msg2 == "Tie!!! PAPER = PAPER" && pWins < 5 && cWins < 5)
    {
        imagePlayer.src="https://previews.123rf.com/images/taesmileland/taesmileland1210/taesmileland121000034/15741972-%EB%85%B8%ED%8A%B8%EB%B6%81-%EC%9A%A9%EC%A7%80-%EB%8F%84%EB%A9%B4.jpg";
        imageComputer.src="https://previews.123rf.com/images/taesmileland/taesmileland1210/taesmileland121000034/15741972-%EB%85%B8%ED%8A%B8%EB%B6%81-%EC%9A%A9%EC%A7%80-%EB%8F%84%EB%A9%B4.jpg";
    }
    if (pWins == 5)
    {
        results.textContent = "YOU BEAT THE COMPUTER Mr/Ms LOVELACE";
    }
    else if (cWins == 5)
    {
        results.textContent = "It's a sad day for humans";
    }
});
scissors.addEventListener('click', function(){
    let msg3 = playRound("scissors", computerPlay());
    results.textContent = msg3;
    if (msg3 == "You won!!!!! Scissors beats paper" && pWins < 5 && cWins < 5)
    {
        pWins++;
        player.textContent = pWins;
        imagePlayer.src="https://www.clipartmax.com/png/middle/289-2890339_black-scissors-office-drawing-open-sketch-scissors-drawing.png";
        imageComputer.src="https://previews.123rf.com/images/taesmileland/taesmileland1210/taesmileland121000034/15741972-%EB%85%B8%ED%8A%B8%EB%B6%81-%EC%9A%A9%EC%A7%80-%EB%8F%84%EB%A9%B4.jpg";
    }
    else if (msg3 == "You lose!! Rock beats scissors" && pWins < 5 && cWins < 5)
    {
        
        cWins++;
        computer.textContent = cWins;
        imagePlayer.src="https://www.clipartmax.com/png/middle/289-2890339_black-scissors-office-drawing-open-sketch-scissors-drawing.png";
        imageComputer.src="https://i.ytimg.com/vi/NtT5oizOFiY/maxresdefault.jpg";
    }
    else if (msg3 == "Tie!!! SCISSORS = SCISSORS" && pWins < 5 && cWins < 5)
    {
        imagePlayer.src="https://www.clipartmax.com/png/middle/289-2890339_black-scissors-office-drawing-open-sketch-scissors-drawing.png";
        imageComputer.src="https://www.clipartmax.com/png/middle/289-2890339_black-scissors-office-drawing-open-sketch-scissors-drawing.png";
    }
    if (pWins == 5)
    {
        results.textContent = "YOU BEAT THE COMPUTER Mr/Ms LOVELACE";
    }
    else if (cWins == 5)
    {
        results.textContent = "It's a sad day for humans";
    }
});


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
        
        return "Tie!!! ROCK = ROCK" ;
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
        return "Tie!!! PAPER = PAPER";
    }
    //scissor cases
    else if (playerSelection == "scissors" && computerSelection === 2)
    {
        let str = "You won!!!!! Scissors beats paper";
        return str;
    }
    else if (playerSelection == "scissors" && computerSelection === 0)
    {
        let str = "Tie!!! SCISSORS = SCISSORS";
        return str;
    }
    else if (playerSelection == "scissors" && computerSelection === 1)
    {
        let str = "You lose!! Rock beats scissors";
        return str;
    }
}