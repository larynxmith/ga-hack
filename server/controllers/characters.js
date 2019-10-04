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

module.exports = router
