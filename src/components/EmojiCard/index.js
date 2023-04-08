import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickButton = () => {
    onClickEmoji(id)
  }

  return (
    <li>
      <button type="button" className="emoji-card" onClick={onClickButton}>
        <img className="emoji-image" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
