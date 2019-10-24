import React from 'react'
import Catcher from './components/Catcher'
import Pokedex from './components/Pokedex'
import {Switch, Route} from 'react-router-dom'

export default (
  <Switch>
    <Route exact path='/' component={Pokedex} />
    <Route path='/tallgrass' component={Catcher} />
  </Switch>
)