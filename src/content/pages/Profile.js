import React from 'react'
import { Redirect } from 'react-router-dom'

const Profile = props => {
  if (!props.user) {
    return <Redirect to='/' />
  }
  return (
    <div>

    </div>
  )
}

export default Profile
