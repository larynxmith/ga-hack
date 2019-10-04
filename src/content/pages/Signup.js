import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import SERVER_URL from '../../constants'


class Signup extends React.Component {

  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  }

  storeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value, message: '' })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    //Send the user signup data to the server
    axios.post(`${SERVER_URL}/auth/signup`, this.state)
    .then(response => {
      localStorage.setItem('mernToken', response.data.token)
      this.props.updateUser()
    })
    .catch( err => {
      console.log(err)
      this.setState({
        message: `${err.response.status}: ${err.response.data.message}`
      })
    })
  }

  render() {
    if (this.props.user) {
      return <Redirect to='/profile' />
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>First Name:</label>
            <input name="firstname" placeholder="Your first name" onChange={this.storeInput} />
          </div>
          <div>
            <label>Last Name:</label>
            <input name="lastname" placeholder="Your last name" onChange={this.storeInput} />
          </div>
          <div>
            <label>Email:</label>
            <input name="email" type="email" placeholder="Your email name" onChange={this.storeInput} />
          </div>
          <div>
            <label>Password:</label>
            <input name="password" type="password" placeholder="Your password name" onChange={this.storeInput} />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    )
  }
}

export default Signup
