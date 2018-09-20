const express = require('express')
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config');
const session = require('express-session');
const mongo = require('./db')
const routes = require('./routes/users');
app.set('views', path.join(__dirname, 'views')); // path to the views folder
app.set('view engine', 'pug');
app.use("/visualization", express.static(path.join(__dirname, 'visualization')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/', function(req, res, next) {
 console.log("abc")
});

app.use(session({secret: 'ssshhhhh'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',routes)
app.use(express.static('css')); //load files from public directory using express.


app.listen(process.env.PORT, () => { //do this when deploying it to heroku...3000 when in localhost
  //console.log(`App is running on: ${port}`)
  mongo.connectToDatabase().then(e => console.log("Connected to database..."))
});
//process.env.PORT
