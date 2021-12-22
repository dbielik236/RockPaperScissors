

function playRound() {
    function computerPlay() {
        const computerChoiceArray = ['rock', 'paper', 'scissors'];
        const random = Math.floor(Math.random()*computerChoiceArray.length);
        return computerSelection = computerChoiceArray[random];   
    }
    function promptPlayer() {
        let playerPromptSelection=prompt
        ('Type rock, paper, or scissors to play against the computer. Most points after 5 rounds wins.');
        return playerSelection = playerPromptSelection.toLowerCase();
    }
        
    computerPlay();
    promptPlayer();

    function determineWinner() {
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
    function allocatingPoints() {
        if (outcome==='Computer chose rock. You win the round!' || 
            outcome==='Computer chose paper. You win the round!'||
            outcome==='Computer chose scissors. You win the round!') {
            return winner='Player Wins'
        }
        else if (outcome==='Computer chose rock. You lose the round. :('||
            outcome==='Computer chose paper. You lose the round. :('||
            outcome==='Computer chose scissors. You lose the round. :(') {
            return winner='Computer Wins'
        }
        else return winner='No points'
    }
    determineWinner();
    allocatingPoints();   
}

function game() {
    let playerPoints=0;
    let computerPoints=0;
    
    for (let i = 1; i < 6; i++) {   
        playRound();
        console.log('You chose '+playerSelection+'. '+outcome);
    
        function assignPoints() {
            if (winner==='Computer Wins') {
                return computerPoints+=1
            }
            else if (winner==='Player Wins') {
                return playerPoints+=1
            }
            else return (null)
            }

    assignPoints();   
    console.log('Player points '+playerPoints, 'Computer points '+computerPoints);
    }

    function determineWinner() {
        if (playerPoints>computerPoints) {
            return gameResult='You won the game. Great job!'
        }
        else if (computerPoints>playerPoints) {
            return gameResult='You lost the game. But don\'t let it bother you!'
        }
        else return gameResult='The game was a draw. So... you both won?!'
    }
    determineWinner();
}
game();
console.log(gameResult);
console.log('Refresh the page to play again.');