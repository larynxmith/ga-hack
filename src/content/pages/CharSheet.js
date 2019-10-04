import React, {Component} from 'react'
import axios from 'axios'

const CharSheet = (props) => {

  return (
    <div>
      <h1>{props.character.firstname} {props.character.lastname}</h1>
      <h2>{props.character.race} {props.character.class}</h2>
      <h3>Alignment:{props.character.alignment}</h3>
      <p>Persons of Interest: {props.character.personsOfInterest}</p>
      <p>{props.character.backstory}</p>
    </div>
  )
}

export default CharSheet
