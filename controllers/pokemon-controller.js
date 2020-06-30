const pokedex = require('../routes/pokedex.json');

const pokemonGetIdInfo = (req, res) => {
    const { id, info } = req.params;
    const idAsNumber = parseInt(id, 10);

    const foundPoke = pokedex.find((singlePokemon) => {
        return singlePokemon.id === idAsNumber;
      });

    res.send(foundPoke[info]);

};

const pokemonGetId = (req, res) => {
      const { id } = req.params;
      const idAsNumber = parseInt(id, 10);

      const foundPoke = pokedex.find((singlePokemon) => {
          return singlePokemon.id === idAsNumber;
        });

      res.send(foundPoke);

};

const pokemonGet = function (req, res) {
    res.send(pokedex);

module.exports = {
        pokemonGetIdInfo,
        pokemonGetId,
        pokemonGet
    };
