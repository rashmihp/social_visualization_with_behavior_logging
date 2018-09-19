const express = require('express');
const { body, validationResult } = require('express-validator/check'); // need for validation if both the fields are filled
const router = express.Router();
const master = require('../master');
const session = require('express-session');

router.get('/register', master.register)
router.post('/register', master.registerp)
router.get('/', master.login)
router.post('/auth', master.auth)
router.get('/profile', master.profile)
// temporary route /temp
router.get('/temp/:x/:y', master.temp)
router.get('/ask_question/:x', master.ask_question)
router.get('/scroll/:x/:y/:z', master.scroll)

/*router.get('/rashmi', middlewear1, middlewear2, finalfunction)

function middlewear1(req, res, next) {
  req.rashmi = "something"
  next()
}
function middlewear2(req, res, next) {
  console.log(req.rashmi)
  next()
}
function finalfunction(req, res) {
  res.send(req.rashmi)
}*/

module.exports = router;
