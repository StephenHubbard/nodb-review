import React, {Component} from 'react'
import axios from 'axios'

export default class Catcher extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      img: ''
    }
  }

  componentDidMount() {
    // ! FIRST: generate a random number between 1 and 151
    const pokeNum = Math.ceil(Math.random() * 151)
    // ! SECOND: make axios request to pokemon api with the random number on the end
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`)
      .then(res => {
        // ! THIRD: when the data comes back, set name and img url on state
        this.setState({
          name: res.data.name,
          img: res.data.sprites.front_default
        })
      })
  }

  runAway() {
    this.componentDidMount()
  }

  throwPokeball() {
    axios
      .post('/api/pokemon', this.state)
      .then(res => {
        this.props.history.push('/')
      })
  }
  
  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
        <img src={this.state.img} alt={this.state.name} />
        <hr/>
        <button onClick={() => this.throwPokeball()}>Throw Pokeball</button>
        <button onClick={() => this.runAway()}>Run Away</button>
      </div>
    )
  }
}