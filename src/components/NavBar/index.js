import './index.css'

const NavBar = props => {
  const {score, topScore, isGameProgress} = props

  return (
    <nav className="nav-bar">
      <div className="logo-card">
        <img
          className="logo-image"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="emoji-game-heading">Emoji Game</h1>
      </div>
      {isGameProgress && (
        <div className="result-card">
          <p className="score">Score: {score}</p>
          <p className="top-score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
