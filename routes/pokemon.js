var express = require('express');
var router = express.Router();
var pokedex = require('./pokedex.json')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(pokedex);
});

router.get('/:id', function (req, res, next) {
  var id = req.params;
  var idAsNumber = parseInt(id, 10);

  const foundPokemon = pokedex.find((singlePokemon) => {
      return singlePokemon.id === idAsNumber;
    });

  res.send(id);

});

router.get('/:id/:info', function(req, res, next) {
  var { id, info } = req.params;
  var idAsNumber = parseInt(id, 10);

  const foundPokemon = pokedex.find((singlePokemon) => {
      return singlePokemon.id === idAsNumber;
    });

  res.send(foundPokemon[info]);

});

module.exports = router;
