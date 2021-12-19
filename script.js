

function computerPlay() {
    const computerChoiceArray = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random()*computerChoiceArray.length);
    return computerSelection = computerChoiceArray[random];
    
}

computerPlay();
let playerSelection='scissors';

function oneRound() {
    if (computerSelection==='rock'&&playerSelection==='rock') {
        console.log('Computer chose rock. It\'s a tie...')
    }
    else if (computerSelection==='rock'&&playerSelection==='paper') {
        console.log('Computer chose rock. You won!')
    }
    else if (computerSelection==='rock'&&playerSelection==='scissors') {
        console.log('Computer chose rock. You lose. :(')
    }
    else if (computerSelection==='paper'&&playerSelection==='rock') {
        console.log('Computer chose paper. You lose. :(')
    }
    else if (computerSelection==='paper'&&playerSelection==='paper') {
        console.log('Computer chose paper. It\'s a tie...')
    }
    else if (computerSelection==='paper'&&playerSelection==='scissors') {
        console.log('Computer chose paper. You win!')
    }
    else if (computerSelection==='scissors'&&playerSelection==='rock') {
        console.log('Computer chose scissors. You win!')
    }
    else if (computerSelection==='scissors'&&playerSelection==='paper') {
        console.log('Computer chose scissors. You lose. :(')
    }
    else if (computerSelection==='scissors'&&playerSelection==='scissors') {
        console.log('Computer chose scissors. It\'s a tie...')
    }
}

oneRound(computerSelection, playerSelection);