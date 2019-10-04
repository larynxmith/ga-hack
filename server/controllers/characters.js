let router = require("express").Router();
let db = require("../models");
const axios = require('axios')

router.get('/class', (req, res) => {
  axios.get('http://www.dnd5eapi.co/api/classes')
  .then(response => {
    res.send({ class:response.data })
  })
  .catch(err => {
    console.log('err', err)
  })
})

router.get('/race', (req, res) => {
  axios.get('http://www.dnd5eapi.co/api/races')
  .then(response => {
    res.send({ race: response.data})
  })
  .catch(err => {
    console.log('err', err)
  })
})

router.post('/character', (req, res) => {
  db.Character.create(req.body)
  .then(character => {
    res.send(201).send(character)
  })
  .catch(err => {
    console.log('Error while creating', err)
    if (err.name === 'ValidationError') {
      res.status(406).isend({ message: 'Validation Error' })
    } else {
      res.status(500).send({ message: 'Server Error'})
    }
  })
})

router.get('/character', (req, res) => {
  db.Character.find()
  .then(character => {
    res.send({ character })
  })
  .catch(err => {
    console.log('Error while retrieving characters', err)
    res.status(500).send({ message: 'Server Error' })
  })
})

module.exports = router
