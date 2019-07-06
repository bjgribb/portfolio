import React, { Component } from 'react'
import './App.css'
import Header from './components/header'
import Intro from './components/intro'
import About from './components/about'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Intro />
        <About />
      </div>
    )
  }
}

export default App
