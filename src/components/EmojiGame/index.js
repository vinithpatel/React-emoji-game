import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    isGameProgress: true,
    emojiIdsList: [],
    isWon: false,
  }

  onClickEmoji = id => {
    this.setState(prevState => {
      const {score, topScore, emojiIdsList} = prevState
      const isWon = score + 1 === 12

      if (emojiIdsList.includes(id)) {
        return {
          isGameProgress: false,
          topScore: score > topScore ? score : topScore,
        }
      }

      return {
        score: score + 1,
        emojiIdsList: [...emojiIdsList, id],
        isWon,
        isGameProgress: !isWon,
        topScore: isWon ? 12 : topScore,
      }
    })
  }

  playAgain = () => {
    this.setState({
      score: 0,
      emojiIdsList: [],
      isGameProgress: true,
      isWon: false,
    })
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {score, topScore, isGameProgress, isWon} = this.state
    console.log(isGameProgress)

    const shuffledList = this.shuffledEmojisList()

    return (
      <div className="bg-container">
        <NavBar
          score={score}
          topScore={topScore}
          isGameProgress={isGameProgress}
        />
        <div className="play-ground">
          {isGameProgress && (
            <ul className="game-container">
              {shuffledList.map(eachEmoji => (
                <EmojiCard
                  key={eachEmoji.id}
                  emojiDetails={eachEmoji}
                  onClickEmoji={this.onClickEmoji}
                />
              ))}
            </ul>
          )}
          {!isGameProgress && (
            <WinOrLoseCard
              score={score}
              topScore={topScore}
              playAgain={this.playAgain}
              isWon={isWon}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
