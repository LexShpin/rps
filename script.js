const ROCK = 'rock'
const PAPER = 'paper'
const SCISSORS = 'scissors'

let playerSelection

let playerScore = 0
let computerScore = 0

const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors']

    return choices[Math.round(Math.random() * 2)]
}

const playRound = (playerSelection, computerSelection) => {
    computerSelection = getComputerChoice()


    playerSelection = playerSelection.toLowerCase()

    // Player ROCK
    if (playerSelection == ROCK && computerSelection == ROCK) {
        console.log("TIE!")
    } else if (playerSelection == ROCK && computerSelection == PAPER) {
        computerScore++
    } else if (playerSelection == ROCK && computerSelection == SCISSORS) {
        playerScore++
    }
    // Player PAPER
    else if (playerSelection == PAPER && computerSelection == ROCK) {
        playerScore++
    } else if (playerSelection == PAPER && computerSelection == PAPER) {
        console.log("TIE!")
    } else if (playerSelection == PAPER && computerSelection == SCISSORS) {
        computerScore++
    }
    // Player SCISSORS
    else if (playerSelection == SCISSORS && computerSelection == ROCK) {
        computerScore++
    } else if (playerSelection == SCISSORS && computerSelection == PAPER) {
        playerScore++
    } else if (playerSelection == SCISSORS && computerSelection == SCISSORS) {
        console.log("TIE!")
    }
}

const declareWinner = () => {
    if (playerScore == 5) {
        console.log('Player WON!')
    } else if (computerScore == 5) {
        console.log("Computer WON!")
    }
}

const game = () => {
    while (playerScore < 5 && computerScore < 5) {
        playRound()
        console.log(`Player score: ${playerScore}`)
        console.log(`Computer score: ${computerScore}`)
    }

    declareWinner()
}

game()