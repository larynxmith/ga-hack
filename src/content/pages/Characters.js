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
    axios.get('localhost:3001/5e/character')
    .then(response => {
      console.log(response.data)
      this.setState({ characters: response.data })
    })
    .catch(err => {
      console.log('error getting characters client', err)
    })
  }

  getDnd = () => {
    axios.get('http://www.dnd5eapi.co/api/classes')
    .then(response => {
      this.setState({ class: response.data })
    })
    .catch(err => {
      console.log('err', err)
    })
    axios.get('http://www.dnd5eapi.co/api/races')
    .then(response => {
      this.setState({ race: response.data})
    })
    .catch(err => {
      console.log('err', err)
    })
  }

  render() {
    let chars = this.state.characters.map((c, i) => {
      return <CharSheet
        key={i}
        character={c}
        user={this.props.user}
        getChars={this.getChars}
        characters={this.state.characters}/>

    })
    return (
        <div>
          <h1>Create a Character</h1>
          <hr />

          <CharacterCreation classes={this.state.classes} classes={this.state.races} user={this.props.user}/>
          <CharacterModal />
          <div className="character-container">
            {chars}
          </div>
        </div>
    )
  }
}

export default Character
