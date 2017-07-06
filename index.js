const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mainRouter = ('./routes/routes.js');

app.use(express.static('./'));
app.use(bodyParser.urlencoded({extended: false}));

const mustacheExpress = require('mustache-express');
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use('/', mainRouter);

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/rocks');

const rocksSchema = new mongoose.Schema ({
  color: {type: String, required: true},
  shape: String,
  sizeInMM: {type: Number, required: true},
  rockType: {type: String, required: true},
  foundLocation: [{
    city: String,
    state: String}],
  foundDate: {type: Date, required: true},
});

app.listen(3000, function () {
  console.log('Successfully started node application!')
});
