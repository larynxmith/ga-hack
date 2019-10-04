import React, {Component} from 'react'
import axios from 'axios'

import CharacterCreation from './CharacterCreation';

class Character extends Component {
  state = {
    classes: [],
    races: [],
    user: this.props.user
  }
  componentDidMount() {
    this.getDnd()
    console.log(this.props)
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
    return (
        <div>
          Hello world
          <hr />
          <CharacterCreation classes={this.state.classes} classes={this.state.races} user={this.props.user}/>
        </div>
    )
  }
}

export default Character
