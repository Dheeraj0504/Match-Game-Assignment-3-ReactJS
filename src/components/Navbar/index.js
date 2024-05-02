import './index.css'

const Navbar = props => {
  // console.log(props)
  const {score, timer} = props
  return (
    <nav className="navbar-container">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <ul className="nav-items-container">
        <li>
          <p className="score-text">
            Score: <span className="score-span">{score}</span>
          </p>
        </li>
        <li className="timer-container">
          <img
            className="timer-icon"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className="timer-text">{timer} sec</p>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
