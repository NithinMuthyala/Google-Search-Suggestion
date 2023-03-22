import './index.css'

const SuggestionItem = props => {
  const {eachSuggestion, onclickFunction} = props
  const {id, suggestion} = eachSuggestion
  const arrowClickFunction = () => {
    onclickFunction(suggestion)
  }
  return (
    <li className="list-item">
      <p className="text-suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-icon"
        onClick={arrowClickFunction}
      />
    </li>
  )
}

export default SuggestionItem
