import React, {Component} from 'react'
import axios from 'axios'



class Character extends Component {

  state = {
    classes: [],
    races: [],
    user: this.props.user

  }
  componentDidMount() {
    this.getDnd()
  }

  getDnd = () => {
    axios.get('http://www.dnd5eapi.co/api/classes')
    .then(response => {
      this.setState({ class: response.data })
    })
    .catch(err => {
      console.log('err', err)
    })
    console.log('ee')
    axios.get('http://www.dnd5eapi.co/api/races')
    .then(response => {
      this.setState({ race: response.data})
      console.log(response.data)
    })
    .catch(err => {
      console.log('err', err)
    })
  }

  render() {
    return (
      <div>
        <h1>stub char</h1>
      </div>
    )
  }
}

export default Character
