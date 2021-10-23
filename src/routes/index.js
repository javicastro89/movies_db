var express = require('express');
var router = express.Router();
const db = require('../database/models')

/* GET home page. */
router.get('/', function(req, res, next) {
  db.Movies.findAll()
  .then(movies => {
    res.render('index', { peliculas: movies })
  })
  .catch(err => {
    console.log(err);
  })
});

module.exports = router;
