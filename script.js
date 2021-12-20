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
            return ('Computer chose rock. It\'s a tie...')
        }
        else if (computerSelection==='rock'&&playerSelection==='paper') {
            return ('Computer chose rock. You won!')
        }
        else if (computerSelection==='rock'&&playerSelection==='scissors') {
            return ('Computer chose rock. You lose. :(')
        }
        else if (computerSelection==='paper'&&playerSelection==='rock') {
            return ('Computer chose paper. You lose. :(')
        }
        else if (computerSelection==='paper'&&playerSelection==='paper') {
            return ('Computer chose paper. It\'s a tie...')
        }
        else if (computerSelection==='paper'&&playerSelection==='scissors') {
            return ('Computer chose paper. You win!')
        }
        else if (computerSelection==='scissors'&&playerSelection==='rock') {
            return ('Computer chose scissors. You win!')
        }
        else if (computerSelection==='scissors'&&playerSelection==='paper') {
            return ('Computer chose scissors. You lose. :(')
        }
        else if (computerSelection==='scissors'&&playerSelection==='scissors') {
            return ('Computer chose scissors. It\'s a tie...')
        }    
        else return ('Invalid choice.')
    }
    winnerLoser();
    console.log('You chose '+playerSelection+'.')
    console.log(winnerLoser(computerSelection, playerSelection));
}

function game() {
    let playerPoints=0;
    let computerPoints=0;
    oneRound();
    oneRound();
    oneRound();
    oneRound();
    oneRound();
}

game();

console.log('Game over. Refresh the page to start again.')