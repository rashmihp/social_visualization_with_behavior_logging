var client = require('./db')
const session = require('express-session');
  var sess
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
    sess = req.session
    console.log(req.session)
    db.collection('users').find({email:req.body.email}).toArray(function(err, items){
    if(err) throw err
    else {
      console.log(items)
      sess.username = items[0].username
      if(sess.id){console.log(sess)} else console.log('not found')
      res.redirect('/profile')}
    })
  }
  const profile = (req, res) => {
    var db = client.getDb()

    res.render('profile',{title: "PROFILE",username: sess.username});
  }

  const click = (req, res) => {
    let db = client.getDb()

    let record = {}
    record.x_click = req.params.x
    record.y_click = req.params.y

    db.collection('user-clicks').insertOne(record, (err, c) => console.log("saved coordinates to db"))

    res.send(record)
  }
  const ask = (req, res) => {
    let db = client.getDb()

    let record = {}
    record.question_time = req.params.x

    db.collection('user-clicks').insertOne(record, (err, c) => console.log("saved coordinates to db"))

    res.send(record)
  }

module.exports = {
  register:register,
  registerp:registerp,
  login:login,
  auth:auth,
  profile:profile,
  click:click,
  ask:ask
}
