

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
        if (outcome==='Computer chose rock. You win the round!' || outcome==='Computer chose paper. You win the round!'||outcome==='Computer chose scissors. You win the round!') {
            return winner='Player Wins'
        }
        else if (outcome==='Computer chose rock. You lose the round. :('||outcome==='Computer chose paper. You lose the round. :('||outcome==='Computer chose scissors. You lose the round. :(') {
            return winner='Computer Wins'
        }
        else return winner='No points'
    }
    winnerLoser();
    pointsAllocation();
    console.log('You chose '+playerSelection+'. '+winnerLoser());
    return (pointsAllocation());   
}

function game() {
    let playerPoints=0;
    let computerPoints=0;
    function firstRound() { 
        oneRound()
        if (winner==='Computer Wins') {
            return computerPoints+=1
        }
        else if (winner==='Player Wins') {
            return playerPoints+=1
        }
        else return 'No points awarded this round'
    }
    firstRound();
    console.log('Player points '+playerPoints, 'Computer points '+computerPoints)
    
    function secondRound() { 
        oneRound()
        if (winner==='Computer Wins') {
            return computerPoints+=1
        }
        else if (winner==='Player Wins') {
            return playerPoints+=1
        }
        else if (winner==='No points') {
            return ('No points awarded this round.')
        }
    }
    secondRound();
    console.log('Player points '+playerPoints, 'Computer points '+computerPoints)
    
   
    function thirdRound() { 
        oneRound()
        if (winner==='Computer Wins') {
            return computerPoints+=1
        }
        else if (winner==='Player Wins') {
            return playerPoints+=1
        }
        else if (winner==='No points') {
            return ('No points awarded this round.')
        }
    }
    thirdRound();
    console.log('Player points '+playerPoints, 'Computer points '+computerPoints)
    
    function fourthRound() { 
        oneRound()
        if (winner==='Computer Wins') {
            return computerPoints+=1
        }
        else if (winner==='Player Wins') {
            return playerPoints+=1
        }
        else if (winner==='No points') {
            return ('No points awarded this round.')
        }
    }
    fourthRound();
    console.log('Player points '+playerPoints, 'Computer points '+computerPoints)
    
    function fiveRound() { 
        oneRound()
        if (winner==='Computer Wins') {
            return computerPoints+=1
        }
        else if (winner==='Player Wins') {
            return playerPoints+=1
        }
        else if (winner==='No points') {
            return ('No points awarded this round.')
        }
    }
    fiveRound();
    console.log('Player points '+playerPoints, 'Computer points '+computerPoints)
    }

game();
console.log('Game over. Refresh the page to start again.')