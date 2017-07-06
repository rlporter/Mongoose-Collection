const express = require('express');
const app = express();
const mainRouter = express.Router();

router.use(function rockCollection (req, res) {
  app.get('/', function (req, res) {
      res.render('index',rocks)
    });
});

router.get('/', function (req, res) {
  res.render("rocks", {app.post('/newRock', newRock);
    });
});

router.get('/', function (req, res) {
  res.render("rocks", {app.post('/updateRock', updateRock);
    });
});


module.exports = mainRouter;
