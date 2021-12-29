
    function computerPlay() {
        const computerChoiceArray = ['rock', 'paper', 'scissors'];
        const random = Math.floor(Math.random()*computerChoiceArray.length);
        return computerSelection = computerChoiceArray[random];   
    }

    computerPlay();

function playRound(computerSelection, playerSelection) {    
    function determineWinner() {
        if (computerSelection==='rock'&&playerSelection=='rock') {
            return (outcome='Computer chose rock. It\'s a tie...')
        }
        else if (computerSelection==='rock'&&playerSelection==='paper') {
            return (outcome='Computer chose rock. You win the round!')
        }
        else if (computerSelection==='rock'&&playerSelection==='scissors') {
            return (outcome='Computer chose rock. You lose the round. :(')
        }
        else if (computerSelection==='paper'&&playerSelection=='rock') {
            return (outcome='Computer chose paper. You lose the round. :(')
        }
        else if (computerSelection==='paper'&&playerSelection==='paper') {
            return (outcome='Computer chose paper. It\'s a tie...')
        }
        else if (computerSelection==='paper'&&playerSelection==='scissors') {
            return (outcome='Computer chose paper. You win the round!')
        }
        else if (computerSelection==='scissors'&&playerSelection=='rock') {
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
    console.log("You chose "+playerSelection);
    console.log(determineWinner());
}
    /*function allocatingPoints() {
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
*/
/*
    let playerPoints=0;
    let computerPoints=0;
    
        function assignPoints() {
            if (winner==='Computer Wins') {
                return computerPoints+=1
            }
            else if (winner==='Player Wins') {
                return playerPoints+=1
            }
            else return;
            }

    assignPoints();   
    console.log(`Player points: ${playerPoints}  Computer points: ${computerPoints}`);
    

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
*/


const rockBtn = document.querySelector('.rockButton');
rockBtn.addEventListener('click', () => {
    const playerSelection='rock';
    playRound(computerSelection, playerSelection);
});


const paperBtn = document.querySelector('.paperButton');
paperBtn.addEventListener('click', () => {
    const playerSelection='paper';
    playRound(computerSelection, playerSelection);
});

const scissorsBtn = document.querySelector('.scissorsButton');
scissorsBtn.addEventListener('click', () => {
    const playerSelection='scissors';
    playRound(computerSelection, playerSelection);
});




