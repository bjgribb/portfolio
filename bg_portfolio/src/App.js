import React, { Component } from 'react'
import './App.css'
import Header from './components/header'
import Intro from './components/intro'
import About from './components/about'
import Skills from './components/skills'
import Portfolio from './components/portfolio'
import Experience from './components/experience'
import Footer from './components/footer'
import Education from './components/education'
// import Menu from './components/menu'

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
        <Education />
        <Footer />
      </div>
    )
  }
}

export default App
