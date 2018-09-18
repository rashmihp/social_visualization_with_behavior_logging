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

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',routes)
app.use(express.static('css')); //load files from public directory using express.
app.use(session({secret: 'ssshhhhh'}));

app.listen(process.env.PORT, () => {
  //console.log(`App is running on: ${port}`)
  mongo.connectToDatabase().then(e => console.log("Connected to database..."))
});
