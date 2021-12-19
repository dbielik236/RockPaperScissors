

function computerPlay() {
    const computerChoiceArray = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random()*computerChoiceArray.length);
    let computerSelection = computerChoiceArray[random];
    console.log (computerSelection)
}

computerPlay()
