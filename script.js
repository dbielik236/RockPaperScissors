let playerPoints = 0;
let computerPoints = 0;

const rockBtn = document.querySelector('.rockButton');
rockBtn.addEventListener('click', () => {
const playerSelection='rock';
playRound(computerSelection, 'rock');
});

const paperBtn = document.querySelector('.paperButton');
paperBtn.addEventListener('click', () => {
const playerSelection='paper';
playRound(computerSelection, 'paper');
});

const scissorsBtn = document.querySelector('.scissorsButton');
scissorsBtn.addEventListener('click', () => {
const playerSelection='scissors';
playRound(computerSelection, 'scissors')
});

function playRound(computerSelection, playerSelection) {    

    if (playerPoints<5&&computerPoints<5) {
           
        function computerPlay() {
        const computerChoiceArray = ['rock', 'paper', 'scissors'];
        const random = Math.floor(Math.random()*computerChoiceArray.length);
        return computerSelection = computerChoiceArray[random];   
        }
                
        computerPlay();
      
        //player DOM
        const container = document.querySelector('#playerSelection');
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = playerSelection;
        container.appendChild(content);
            
        //computer DOM
        const cmptSelection = document.querySelector('#computerSelection');
        const cmptText = document.createElement('div');
        cmptText.classList.add('cmptContent');
        cmptText.textContent = computerSelection;
        cmptSelection.appendChild(cmptText);

        function determineWinner() {
            if (computerSelection==='rock'&&playerSelection=='rock') {
                return (outcome='It\'s a tie...')
                }
            else if (computerSelection==='rock'&&playerSelection==='paper') {
                return (outcome='You win the round!')
            }
            else if (computerSelection==='rock'&&playerSelection==='scissors') {
                return (outcome='You lose the round. :(')
            }
            else if (computerSelection==='paper'&&playerSelection=='rock') {
                return (outcome='You lose the round. :(')
            }
            else if (computerSelection==='paper'&&playerSelection==='paper') {
                return (outcome='It\'s a tie...')
            }
            else if (computerSelection==='paper'&&playerSelection==='scissors') {
                return (outcome='You win the round!')
            }
            else if (computerSelection==='scissors'&&playerSelection=='rock') {
                return (outcome='You win the round!')
            }
            else if (computerSelection==='scissors'&&playerSelection==='paper') {
                return (outcome='You lose the round. :(')
            }
            else if (computerSelection==='scissors'&&playerSelection==='scissors') {
                return (outcome='It\'s a tie...')
            }    
        }

        determineWinner();

        //outcome DOM
        const roundResult = document.querySelector('#roundResults');
        const results = document.createElement('div');
        results.classList.add('winnerRound');
        results.textContent = outcome;
        roundResult.appendChild(results);

        function allocatingPoints() {
            if (outcome=='You win the round!' || 
                outcome=='You win the round!'||
                outcome=='You win the round!') {
                return winner='Player Wins'
            }
            else if (outcome=='You lose the round. :('||
                outcome=='You lose the round. :('||
                outcome=='You lose the round. :(') {
                return winner='Computer Wins'
                }
            else return winner='No points'
        }
            
        allocatingPoints();

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
                  
        //score DOM
        const roundScore = document.querySelector('#runningScore');
        const score = document.createElement('div');
        score.classList.add('roundScore');
        score.textContent = 'Computer: '+computerPoints+'  Player: ' +playerPoints;
        roundScore.appendChild(score);
    }
                
    else return

    if (playerPoints == 5) {
        const playerWins = document.querySelector('#winnerBanner');
        const youWin = document.createElement('div');
        youWin.classList.add('winner');
        youWin.textContent = 'You won the game!!!';
        playerWins.appendChild(youWin);
    }
                    
    
    if (computerPoints == 5) {
        const computerWins = document.querySelector('#winnerBanner');
        const youLose = document.createElement('div');
        youLose.classList.add('winner');
        youLose.textContent = 'Game over: You lost';
        computerWins.appendChild(youLose);
    }
}
 


    






