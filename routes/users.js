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


//router.get('/login', (req, res) => {
  //res.render('loginform',{title: "LOGIN"});
//});
module.exports = router;
