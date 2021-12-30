
/*
function computerPlay() {
    const computerChoiceArray = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random()*computerChoiceArray.length);
    return computerSelection = computerChoiceArray[random];   
}
computerPlay();

function playerChoice() {
    const rockBtn = document.querySelector('.rockButton');
    rockBtn.addEventListener('click', () => {
        const playerSelection='rock';
        playRound(computerSelection, playerSelection);

        //player DOM
        const container = document.querySelector('#playerSelection');
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'Player choice: '+playerSelection;
        container.appendChild(content);
        
        //computer DOM
        const cmptSelection = document.querySelector('#computerSelection');
        const cmptText = document.createElement('div');
        cmptText.classList.add('cmptContent');
        cmptText.textContent = 'Computer choice: '+computerSelection;
        cmptSelection.appendChild(cmptText);
    });


    const paperBtn = document.querySelector('.paperButton');
    paperBtn.addEventListener('click', () => {
        const playerSelection='paper';
        playRound(computerSelection, playerSelection);

        //player DOM
        const container = document.querySelector('#playerSelection');
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'Player choice: '+playerSelection;
        container.appendChild(content);
        
        //computer DOM
        const cmptSelection = document.querySelector('#computerSelection');
        const cmptText = document.createElement('div');
        cmptText.classList.add('cmptContent');
        cmptText.textContent = 'Computer choice: '+computerSelection;
        cmptSelection.appendChild(cmptText);
    });

    const scissorsBtn = document.querySelector('.scissorsButton');
    scissorsBtn.addEventListener('click', () => {
        const playerSelection='scissors';
        playRound(computerSelection, playerSelection);

        //player DOM
        const container = document.querySelector('#playerSelection');
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'Player choice: '+playerSelection;
        container.appendChild(content);
        
        //computer DOM
        const cmptSelection = document.querySelector('#computerSelection');
        const cmptText = document.createElement('div');
        cmptText.classList.add('cmptContent');
        cmptText.textContent = 'Computer choice: '+computerSelection;
        cmptSelection.appendChild(cmptText);
    });
}
playerChoice();

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
    determineWinner();

    //outcome DOM
    const roundResult = document.querySelector('#roundResults');
    const results = document.createElement('div');
    results.classList.add('winnerRound');
    results.textContent = outcome;
    roundResult.appendChild(results);

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
    allocatingPoints();
}    
function game() {
    for (let i = 1; i < 6; i++) {   
        playRound();
    let playerPoints=0;
    let computerPoints=0;
    
    function assignPoints() {
        if (winner=='Computer Wins') {
            return computerPoints+=1
        }
        else if (winner=='Player Wins') {
        return playerPoints+=1
        }
        else return;
    }

    assignPoints();
    console.log(computerPoints, playerPoints)   
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
    
*/

function playRound() {

    function computerPlay() {
        const computerChoiceArray = ['rock', 'paper', 'scissors'];
        const random = Math.floor(Math.random()*computerChoiceArray.length);
        return computerSelection = computerChoiceArray[random];   
    }

    function initiateRound() {
        const rockBtn = document.querySelector('.rockButton');
        rockBtn.addEventListener('click', () => {
            const playerSelection='rock';

            computerPlay();
            
            //player DOM
            const container = document.querySelector('#playerSelection');
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = 'Player choice: '+playerSelection;
            container.appendChild(content);
            
            //computer DOM
            const cmptSelection = document.querySelector('#computerSelection');
            const cmptText = document.createElement('div');
            cmptText.classList.add('cmptContent');
            cmptText.textContent = 'Computer choice: '+computerSelection;
            cmptSelection.appendChild(cmptText);

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
                }

                determineWinner();
                //outcome DOM
                const roundResult = document.querySelector('#roundResults');
                const results = document.createElement('div');
                results.classList.add('winnerRound');
                results.textContent = outcome;
                roundResult.appendChild(results);

        });    
        const paperBtn = document.querySelector('.paperButton');
        paperBtn.addEventListener('click', () => {
            const playerSelection='paper';

            computerPlay();
            
            //player DOM
            const container = document.querySelector('#playerSelection');
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = 'Player choice: '+playerSelection;
            container.appendChild(content);
            
            //computer DOM
            const cmptSelection = document.querySelector('#computerSelection');
            const cmptText = document.createElement('div');
            cmptText.classList.add('cmptContent');
            cmptText.textContent = 'Computer choice: '+computerSelection;
            cmptSelection.appendChild(cmptText);

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
                }
                determineWinner();
                //outcome DOM
                const roundResult = document.querySelector('#roundResults');
                const results = document.createElement('div');
                results.classList.add('winnerRound');
                results.textContent = outcome;
                roundResult.appendChild(results);
        });

        const scissorsBtn = document.querySelector('.scissorsButton');
        scissorsBtn.addEventListener('click', () => {
            const playerSelection='scissors';

            computerPlay();
            
            //player DOM
            const container = document.querySelector('#playerSelection');
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = 'Player choice: '+playerSelection;
            container.appendChild(content);
            
            //computer DOM
            const cmptSelection = document.querySelector('#computerSelection');
            const cmptText = document.createElement('div');
            cmptText.classList.add('cmptContent');
            cmptText.textContent = 'Computer choice: '+computerSelection;
            cmptSelection.appendChild(cmptText);

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
                }
                determineWinner();
                //outcome DOM
                const roundResult = document.querySelector('#roundResults');
                const results = document.createElement('div');
                results.classList.add('winnerRound');
                results.textContent = outcome;
                roundResult.appendChild(results);

        });
    }
    
initiateRound();

}

playRound();




