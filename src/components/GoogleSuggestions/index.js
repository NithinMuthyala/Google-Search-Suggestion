import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {userInput: ''}

  userSearchText = event => {
    const {userInput} = this.state
    this.setState({userInput: event.target.value})
  }

  onclickFunction = suggestion => {
    const {userInput} = this.state
    this.setState({userInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {userInput} = this.state

    const searchsuggestion = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion.toLowerCase().includes(userInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="suggestion-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              value={userInput}
              onChange={this.userSearchText}
            />
          </div>
          <ul>
            {searchsuggestion.map(eachSuggestion => (
              <SuggestionItem
                key={eachSuggestion.id}
                eachSuggestion={eachSuggestion}
                onclickFunction={this.onclickFunction}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
