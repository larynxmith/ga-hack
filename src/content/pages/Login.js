import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import SERVER_URL from '../../constants'

class Login extends React.Component {

  state = {
    email: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${SERVER_URL}/auth/login`, this.state)
    .then(response => {
      //Assign token
      localStorage.setItem('mernToken', response.data.token)
      this.props.updateUser()
    })
    .catch(err => {
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
        <h2>Login</h2>
        <span className='red'>{this.state.message}</span>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email:</label>
            <input name="email" type="email" placeholder="Your email name" onChange={(e) => this.setState({ email: e.target.value, message: '' })} />
          </div>
          <div>
            <label>Password:</label>
            <input name="password" type="password" placeholder="Your password name" onChange={(e) => this.setState({ password: e.target.value, message: ''})} />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default Login
