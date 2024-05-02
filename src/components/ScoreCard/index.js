import './index.css'

const ScoreCard = props => {
  // console.log(props)
  const {score, playAgain} = props

  const onClickPlayAgain = () => {
    playAgain()
  }

  return (
    <div className="score-card-bg">
      <img
        className="trophy-image"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p className="score-card-heading">YOUR SCORE</p>
      <h1 className="scorecard-score-number">{score}</h1>
      <button
        type="button"
        className="play-again-button"
        onClick={onClickPlayAgain}
      >
        <img
          className="reset-image"
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        <p className="play-again-text">PLAY AGAIN</p>
      </button>
    </div>
  )
}

export default ScoreCard
