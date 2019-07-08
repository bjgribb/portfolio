import React, { Component } from 'react'
import './App.css'
import Header from './components/header'
import Intro from './components/intro'
import About from './components/about'
import Skills from './components/skills'
import Portfolio from './components/portfolio'
import Experience from './components/experience'
import Footer from './components/footer'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Intro />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Footer />
      </div>
    )
  }
}

export default App
