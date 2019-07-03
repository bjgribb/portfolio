import React, { Component } from 'react'
import './App.css'
import Header from './components/header'
import Intro from './components/intro'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Intro />
      </div>
    )
  }
}

export default App
