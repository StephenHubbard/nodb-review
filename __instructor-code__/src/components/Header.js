import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header>
      <h1>Gotta Catch 'em All!</h1>
      <nav>
        <Link to="/">Pokedex</Link>
        <Link to="/tallgrass">Tall Grass</Link>
      </nav>
    </header>
  )
}

export default Header
