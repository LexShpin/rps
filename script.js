const ROCK = 'rock'
const PAPER = 'paper'
const SCISSORS = 'scissors'

const PLAYER = 'Player'
const COMPUTER = 'Computer'

// Player Buttons
const rockBtn = document.getElementById('rock-btn')
const paperBtn = document.getElementById('paper-btn')
const scissorsBtn = document.getElementById('scissors-btn')
const playerBtns = document.querySelectorAll('.play-btn')

// Computer Buttons
const computerRockBtn = document.getElementById('computer-rock-btn')
const computerPaperBtn = document.getElementById('computer-paper-btn')
const computerScissorsBtn = document.getElementById('computer-scissors-btn')

// Texts
const results = document.getElementById('results')
const resultText = document.getElementById('results__text')
const playerScoreText = document.getElementById('player-score-text')
const computerScoreText = document.getElementById('computer-score-text')

// Start over btn
const startOverBtn = document.querySelector('.start-over-btn')

let playerSelection

let playerScore = 0
let computerScore = 0
let winner

const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors']

    return choices[Math.round(Math.random() * 2)]
}

const playRound = (playerSelection, computerSelection) => {

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
        winner = PLAYER
        console.log('Player WON!')
        finishGame()
    } else if (computerScore == 5) {
        winner = COMPUTER
        console.log("Computer WON!")
        finishGame()
    }
}

const updateUI = () => {
    playerScoreText.textContent = `Player: ${playerScore}`
    computerScoreText.textContent = `Computer: ${computerScore}`
}

const finishGame = () => {
    playerBtns.forEach(btn => {
       btn.setAttribute('disabled', '')
    })

    results.style.display = 'flex'
    resultText.textContent = `${winner} won! Do you want to restart?`
}

const startGame = () => {
    playerBtns.forEach(btn => {
        btn.removeAttribute('disabled', '')
    })

    playerScore = 0
    computerScore = 0

    results.style.display = 'none'

    updateUI()
}

// EVENT LISTENERS
rockBtn.addEventListener('click', e => {
    playRound(ROCK, getComputerChoice())
    updateUI()
    declareWinner()
})

paperBtn.addEventListener('click', e => {
    playRound(PAPER, getComputerChoice())
    updateUI()
    declareWinner()
})

scissorsBtn.addEventListener('click', e => {
    playRound(SCISSORS, getComputerChoice())
    updateUI()
    declareWinner()
})

startOverBtn.addEventListener('click', e => {
    console.log(e.target)
    startGame()
})

startGame()