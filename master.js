var client = require('./db')
const session = require('express-session');

const register = (req, res) => {
  res.render('register',{title: "Registration form"});
}

const registerp = (req, res) => {
  let db = client.getDb()
  let record = {
    email: req.body.email,
    username: req.body.username,
    password:req.body.password
  }
  db.collection('users').insertOne(record, (err, c) => console.log("saved to database"))
  res.redirect('http://google.com')
  }

  const login = (req, res) => {
    res.render('login',{title: "LOGIN"});
  }

  const auth = (req, res) => {
    var db = client.getDb()
    console.log(req.session)
    db.collection('users').find({email:req.body.email}).toArray(function(err, items){
    if(err) throw err
    else {
      console.log(items)
      //sess.id = items._id // this is the error ..now try
      //if(sess.id){console.log(sess.id)} else console.log('not found')
      res.redirect('/profile')}
    })
  }
  const profile = (req, res) => {
    res.render('profile',{title: "PROFILE",username: "abc"});
  }

  const temp = (req, res) => {
    let db = client.getDb()

    let record = {}
    record.x = req.params.x
    record.y = req.params.y

    db.collection('user-clicks').insertOne(record, (err, c) => console.log("saved coordinates to db"))
    let response = {}
    response.x = x
    response.y = y

    res.send(record)
  }

module.exports = {
  register:register,
  registerp:registerp,
  login:login,
  auth:auth,
  profile:profile,
  temp:temp
}
