import React, {Component} from 'react'
import CharacterCreation from './CharacterCreation';

class Character extends Component {
  state = {
    name: '',
    race: '',
    class: '',

  }
  render() {
    return (
        <div>
        Hello world
        <hr />
        <CharacterCreation />
        </div>
    )
  }
}


export default Character
