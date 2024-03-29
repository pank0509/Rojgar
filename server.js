const express = require("express");
const mongoose = require("mongoose");
const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyParser = require("body-parser");
const Keys = require("./config/keys");
const app = express();
require('./services/passport');
const items = require("./routes/api/items");
// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

app.use(
  cookieSession({
    maxAge: 2 * 24 * 60 * 60 * 1000,
    keys: [Keys.cookieKey]
  })
);
// Connect to Mongo
app.use(passport.initialize());
app.use(passport.session());

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

app.use('/api', items);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const port = process.env.PORT || 8000;
app.listen(port);
