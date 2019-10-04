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

//Create a char

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

//Get All Chars

router.get('/character', (req, res) => {
  db.Character.find()
  .then(character => {
    console.log(character)
    res.send({ character })
  })
  .catch(err => {
    console.log('Error while retrieving characters', err)
    res.status(500).send({ message: 'Server Error' })
  })
})

//Get One Char

router.get('/character/:id', (req, res) => {
  db.Character.find()
  .then(character => {
    console.log('cr')
    res.send({ character })
  })
  .catch(err => {
    console.log('Error while retrieving characters', err)
    res.status(500).send({ message: 'Server Error' })
  })
})

//Edit One Char

router.put('/character/:id', (req, res) => {
  db.Character.findOneAndUpdate({
    _id: req.params.id
  },
  req.body,
  {new: true})
  .then(updatedChar => {
    res.status(201).send(updatedChar)
  })
  .catch(err => {
    console.log('Error when updating characters', err)
    res.status(500).send({ message: 'Server Error'})
  })
})



router.get('/campaign', (req, res) => {
  db.Campaign.find()
  .then(campaign => {
    console.log(campaign)
    res.send({ campaign })
  })
})

router.post('/campaign', (req, res) => {
  db.Campaign.create(req.body)
  .then(campaign => {
    res.send(201).send(campaign)
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

router.put('/campaign/:id', (req, res) => {
  db.Character.findOneAndUpdate({
    _id: req.params.id
  },
  req.body,
  {new: true})
  .then(updatedCam => {
    res.status(201).send(updatedCam)
  })
  .catch(err => {
    console.log('Error when updating characters', err)
    res.status(500).send({ message: 'Server Error'})
  })
})


module.exports = router
