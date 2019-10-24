import React, {Component} from 'react'
import Pokemon from './Pokemon'
import axios from 'axios'
import './Pokedex.css'

export default class Pokedex extends Component {
  constructor() {
    super()
    this.state = {
      pokemon: []
    }
    this.updateName = this.updateName.bind(this)
    this.deletePokemon = this.deletePokemon.bind(this)
  }

  componentDidMount() {
    axios
      .get('/api/pokemon')
      .then(res => {
        this.setState({
          pokemon: res.data
        })
      })
  }

  updateName(id, body) {
    axios
      .put(`/api/pokemon/${id}`, body)
      .then(res => {
        this.setState({
          pokemon: res.data
        })
      })
  }

  deletePokemon(id) {
    axios
      .delete(`/api/pokemon/${id}`)
      .then(res => {
        this.setState({
          pokemon: res.data
        })
      })
  }

  render() {
    return (
      <div className="pokedex">
        {this.state.pokemon.map(el => (
          <Pokemon 
            pokemonObj={el} key={el.id} 
            updateNameFn={this.updateName}
            deleteFn={this.deletePokemon}
          />
        ))}
      </div>
    )
  }
}