

function oneRound() {
    function computerPlay() {
        const computerChoiceArray = ['rock', 'paper', 'scissors'];
        const random = Math.floor(Math.random()*computerChoiceArray.length);
        return computerSelection = computerChoiceArray[random];   
    }
    function playerPrompt() {
        let playerPromptSelection=prompt('Type rock, paper, or scissors to play against the computer. Best of 5 rounds wins.');
        playerSelection = playerPromptSelection.toLowerCase();
    }
        
    computerPlay();
    playerPrompt();

    function winnerLoser(computerSelection, playerSelection) {
        if (computerSelection==='rock'&&playerSelection==='rock') {
            return (rockRock='Computer chose rock. It\'s a tie...')
        }
        else if (computerSelection==='rock'&&playerSelection==='paper') {
            return (rockPaper='Computer chose rock. You win the round!')
        }
        else if (computerSelection==='rock'&&playerSelection==='scissors') {
            return (rockScissors='Computer chose rock. You lose the round. :(')
        }
        else if (computerSelection==='paper'&&playerSelection==='rock') {
            return (paperRock='Computer chose paper. You lose the round. :(')
        }
        else if (computerSelection==='paper'&&playerSelection==='paper') {
            return (paperPaper='Computer chose paper. It\'s a tie...')
        }
        else if (computerSelection==='paper'&&playerSelection==='scissors') {
            return (paperScissors='Computer chose paper. You win the round!')
        }
        else if (computerSelection==='scissors'&&playerSelection==='rock') {
            return (scissorsRock='Computer chose scissors. You win the round!')
        }
        else if (computerSelection==='scissors'&&playerSelection==='paper') {
            return (scissorsPaper='Computer chose scissors. You lose the round. :(')
        }
        else if (computerSelection==='scissors'&&playerSelection==='scissors') {
            return (scissorsScissors='Computer chose scissors. It\'s a tie...')
        }    
        else return ('Invalid choice.')
    }
    winnerLoser();
    console.log('You chose '+playerSelection+'.')
    return (winnerLoser(computerSelection, playerSelection));
}

function game() {
    console.log(oneRound());
    console.log(oneRound());
    console.log(oneRound());
    console.log(oneRound());
    console.log(oneRound());
}

game();

console.log('Game over. Refresh the page to start again.')