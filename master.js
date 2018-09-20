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
    //sess = req.session
    console.log(req.session) //here ur not checking if the entered password is same as what is in the database...ur just checking email
    db.collection('users').find({email:req.body.email}).toArray(function(err, items){
    if(err) throw err // instead of scroll
    else {
      console.log(items)
      req.session.username = items[0].username
      if(req.session.username){console.log(req.session)} else console.log('not found')
      res.redirect('/profile')}
    })
  }
  const restrict = (req, res, next) => {
    if(req.session.username){
      next();
      }
      else {
        console.log("access denied")
        res.redirect('/')

      }
  }
  const profile = (req, res) => {
    //var db = client.getDb()

    res.render('profile',{title: "PROFILE",username: req.session.username});
  }

  const temp = (req, res) => {
    let db = client.getDb()

    let record = {}
    record.username = req.session.username
    record.x_clicks = req.params.x
    record.y_clicks = req.params.y

    db.collection('user-clicks').insertOne(record, (err, c) => console.log("saved coordinates to db"))

    res.send(record)
  }
  const ask_question = (req, res) => {
    let db = client.getDb()

    let question = {}
    question.username = req.session.username
    question.qtime = req.params.x

    db.collection('user-clicks').insertOne(question, (err, c) => console.log("saved qtime to db"))

    res.send(question) //dont have to send everytime...i had used send just to show that server is working // just a confirmation if that function is working and waht it is sending..okok...
  }
  const scroll = (req, res) => {
    let db = client.getDb()

    let record = {}
    record.username = req.session.username
    record.x_scroll = req.params.x
    record.y_scroll = req.params.y
    record.time_scroll = req.params.z // y same in both these lines? by mistake
    db.collection('user-scroll').insertOne(record, (err, c) => console.log("saved scrolling to db"))

    res.send(record)
  }


module.exports = {
  register:register,
  registerp:registerp,
  login:login,
  auth:auth,
  restrict:restrict,
  profile:profile,
  temp:temp,
  ask_question:ask_question,
  scroll:scroll
}
