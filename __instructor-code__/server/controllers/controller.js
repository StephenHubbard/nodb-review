const pokemonCaught = []
let id = 0

module.exports = {
  catch: (req, res) => {
    // ! add an id to the body
    const newPokemon = {...req.body, id}
    // ! add the new pokemon obj to the pokemonCaught array
    pokemonCaught.push(newPokemon)
    // ! increment the id
    id++
    // ! res.status(200).send(the updated array)
    res.status(200).send(pokemonCaught)
  },
  getPokedex: (req, res) => {
    res.status(200).send(pokemonCaught)
  },
  rename: (req, res) => {
    const {id} = req.params
    const {name} = req.body
    const index = pokemonCaught.findIndex(el => el.id === +id)
    pokemonCaught[index].name = name
    res.status(200).send(pokemonCaught)
  },
  release: (req, res) => {
    const {id} = req.params
    const index = pokemonCaught.findIndex(el => el.id === +id)
    pokemonCaught.splice(index, 1)
    res.status(200).send(pokemonCaught)
  }
}