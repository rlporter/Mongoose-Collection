const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mainRouter = ('./routes/routes');

app.use(express.static('./'));
app.use(bodyParser.urlencoded({extended: false}));

const mustacheExpress = require('mustache-express');
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

// const getRock = function (req, res, next) {
//   const rockId = req.params.rockId;
//   const rock = rocks.get(rockId);
// };



const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/rocks');

const rocksSchema = new mongoose.Schema ({
  color: {type: String, required: true},
  shape: String,
  sizeInMM: {type: Number, required: true},
  rockType: {type: String, required: true},
  foundLocation: [{city: String, state: String}],
  foundDate: {type: Date, required: true},
});

const RockCollection = mongoose.model('RockCollection', rocksSchema);
let newRock = new RockCollection ({});

newRock.save()
  .then(function(){
    console.log('meow');
  })
  .catch(function (){
    console.log(err);
  });


// let updateRock =



app.listen(3000, function () {
  console.log('Successfully started node application!')
});

app.use('/', mainRouter);
module.exports = RockCollection;
