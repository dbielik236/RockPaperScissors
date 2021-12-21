

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

    function winnerLoser() {
        if (computerSelection==='rock'&&playerSelection==='rock') {
            return (outcome='Computer chose rock. It\'s a tie...')
        }
        else if (computerSelection==='rock'&&playerSelection==='paper') {
            return (outcome='Computer chose rock. You win the round!')
        }
        else if (computerSelection==='rock'&&playerSelection==='scissors') {
            return (outcome='Computer chose rock. You lose the round. :(')
        }
        else if (computerSelection==='paper'&&playerSelection==='rock') {
            return (outcome='Computer chose paper. You lose the round. :(')
        }
        else if (computerSelection==='paper'&&playerSelection==='paper') {
            return (outcome='Computer chose paper. It\'s a tie...')
        }
        else if (computerSelection==='paper'&&playerSelection==='scissors') {
            return (outcome='Computer chose paper. You win the round!')
        }
        else if (computerSelection==='scissors'&&playerSelection==='rock') {
            return (outcome='Computer chose scissors. You win the round!')
        }
        else if (computerSelection==='scissors'&&playerSelection==='paper') {
            return (outcome='Computer chose scissors. You lose the round. :(')
        }
        else if (computerSelection==='scissors'&&playerSelection==='scissors') {
            return (outcome='Computer chose scissors. It\'s a tie...')
        }    
        else return ('Invalid choice.')
    }
    function pointsAllocation() {
        let playerPoints=0;
        let computerPoints=0;
        if (outcome==='Computer chose rock. You win the round!' || outcome==='Computer chose paper. You win the round!'||outcome==='Computer chose scissors. You win the round!') {
            return playerPoints+=1
        }
        else if (outcome==='Computer chose rock. You lose the round. :('||outcome==='Computer chose paper. You lose the round. :('||outcome==='Computer chose scissors. You lose the round. :(') {
            return computerPoints+=1
        }
        else return ('no points awarded')
    }
    winnerLoser();
    console.log(pointsAllocation());
    console.log('You chose '+playerSelection+'.');
    return (winnerLoser());
}

function game() {
    console.log(oneRound());
    console.log(oneRound());
}

game();

console.log('Game over. Refresh the page to start again.')