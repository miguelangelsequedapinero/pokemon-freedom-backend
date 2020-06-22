var express = require('express');
var router = express.Router();
var pokedex = require('./pokedex.json')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(pokedex);
});

module.exports = router;
