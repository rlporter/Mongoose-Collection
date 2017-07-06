const express = require('express');
const app = express();
const mainRouter = express.Router();
//Require model
const rockCollection = mongoose.model('rockCollection', rocksSchema);

//Display list of collected rocks//
const getRock = function (req, res, next) {
  const rockId = req.params.rockId;
  const rock = rocks.get(rockId);
};

router.get('/', function(req, res) {
  req.findAll.rocks;
  res.render("index", rocks);
});

//Add a new rock to the collection list
router.post('/createRock', function(req, res){
  rock.create({
    color: req.body.newColor,
    shape: req.body.newShape,
    size: req.body.newSizeInMM,
    foundDate: req.body.newfoundDate
  }).then(function(){
    rock.save;
    res.redirect('/');
  });
});
module.exports = rockCollection;
let rockID = mongoose.model('_id', rocksSchema);

//Update a rock in the collection//
router.patch('/updateRock/:id', function (req, res) {
  rock.find(rockID).exec(function(err, rocks){
    res.render("index", rocks);
    res.redirect('/');
  });

//Delete a rock from the collection//
router.post('/deleteRock/:id'), function(req,res){
  rock.find(rockID).remove().exec(function (err, rocks){
    res.render("index", rocks);
    res.redirect('/');
  });

module.exports = mainRouter;
