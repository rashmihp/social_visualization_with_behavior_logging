var client = require('./db')
const session = require('express-session');
  const register = (req, res) => {
  res.render('register',{title: "Registration form", message: "REGISTER"});
}

const registerp = (req, res) => {
  let db = client.getDb()
  let record = {
    email: req.body.email,
    username: req.body.username,
    password:req.body.password,
    age:req.body.age

  }
  db.collection('users').insertOne(record, (err, c) => console.log("saved to database"))
  res.redirect('http://google.com')
  }

  const login = (req, res) => {
    res.render('login',{title: "LOGIN", message:"LOGIN"});
  }

  const auth = (req, res) => {
    var db = client.getDb()
    //sess = req.session
    console.log("session"+JSON.stringify(req.session)) //here ur not checking if the entered password is same as what is in the database...ur just checking email
    db.collection('users').find({email:req.body.email}).toArray(function(err, items){
    if(err) throw err // instead of scroll
    else {
      console.log(items)
      req.session.username = items[0].username // yes... the sesssion.username is not passed after profile to any othr function
      if(req.session.username){console.log("if present"+ JSON.stringify(req.session))} else console.log('not found') //correct? redeploy
      res.redirect('/profile')}
    })
  }
  const restrict = (req, res, next) => {
    console.log('inside restrict' + JSON.stringify(req.session))
    if(req.session.username){ // label them properly else ul only get confused
      next();
      }
      else {
        console.log("access denied")
        res.redirect('/')

      }
  }
  const profile = (req, res) => {
    //var db = client.getDb()

    res.render('profile',{title: "PROFILE",message: "PROFILE", username: req.session.username});
  }

  const temp = (req, res) => {
    let db = client.getDb()

    let record = {}
    record.x_clicks = req.params.x
    record.y_clicks = req.params.y

    db.collection('user-clicks').insertOne(record, (err, c) => console.log("saved coordinates to db"))

    res.send(record)
  }
  const ask_question = (req, res) => {
    let db = client.getDb()

    let question = {}
    question.qtime = req.params.x

    db.collection('user-clicks').insertOne(question, (err, c) => console.log("saved qtime to db"))

    res.send(question) //dont have to send everytime...i had used send just to show that server is working // just a confirmation if that function is working and waht it is sending..okok...
  }
  const comment = (req, res) => {
    let db = client.getDb()

    let question = {}
    question.ctime = req.params.x

    db.collection('user-clicks').insertOne(question, (err, c) => console.log("saved ctime to db"))

    res.send(question) //dont have to send everytime...i had used send just to show that server is working // just a confirmation if that function is working and waht it is sending..okok...
  }
  const scroll = (req, res) => {
    let db = client.getDb()

    let record = {}
    record.x_scroll = req.params.x
    record.y_scroll = req.params.y
    record.time_scroll = req.params.z // y same in both these lines? by mistake
    db.collection('user-scroll').insertOne(record, (err, c) => console.log("saved scrolling to db"))

    res.send(record)
  }

  const logout = (req, res) => {
    req.session.destroy(function(err) {
  if(err) {
    console.log(err);
  } else {
    res.redirect('/');
  }
})
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
  comment:comment,
  scroll:scroll,
  logout:logout
}
