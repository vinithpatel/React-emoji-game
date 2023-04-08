import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgain, isWon} = props

  const onClickPlayAgainButton = () => {
    playAgain()
  }

  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const resultTextStatus = isWon ? 'You Won' : 'You Lose'
  const scoreText = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-container">
      <img className="result-image" src={imageUrl} alt="win or lose" />
      <div className="win-or-lose-status-card">
        <h1 className="win-or-lose-status">{resultTextStatus}</h1>
        <p className="best-score-text">{scoreText}</p>
        <p className="result-score">{score}/12</p>
        <button
          className="play-again-button"
          type="button"
          onClick={onClickPlayAgainButton}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
