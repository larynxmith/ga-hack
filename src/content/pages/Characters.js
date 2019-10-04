import React, {Component} from 'react'
import axios from 'axios'

import CharacterCreation from './CharacterCreation';
import CharacterModal from './CharacterModal';
import CharSheet from './CharSheet';


class Character extends Component {
  state = {
    characters: [],
    classes: [],
    races: [],
    user: this.props.user
  }
  componentDidMount() {
    this.getDnd()
    console.log(this.props)
    this.getChars()
  }

  getChars = () => {
    axios.get('http://localhost:3001/5e/character')
    .then(response => {
      console.log(response.data)
      this.setState({ characters: response.data.character })
    })
    .catch(err => {
      console.log('error getting characters client', err)
    })
  }

  getDnd = () => {
    axios.get('http://www.dnd5eapi.co/api/classes')
    .then(response => {
        console.log('classes: ', response.data)
      this.setState({ classes: response.data.results })
    })
    .catch(err => {
      console.log('err', err)
    })
    axios.get('http://www.dnd5eapi.co/api/races')
    .then(response => {
        this.setState({ races: response.data.results})

    })
    .catch(err => {
      console.log('err', err)
    })
  }

  render() {
    console.log(this.state.characters)
    let chars = this.state.characters.map((c, i) => {
      return <CharSheet
        key={i}
        character={c}
        user={this.props.user}
        getChars={this.getChars}
        characters={this.state.characters} />

    })
    return (
        <div>
          <h1>Create a Character</h1>
          <hr />
            <CharacterCreation classes={this.state.classes} races={this.state.races} user={this.props.user}/>
            <CharacterModal classes={this.state.classes} races={this.state.races} user={this.props.user}/>
          <div className="character-container">
            {chars}
          </div>
        </div>
    )
  }
}

export default Character
