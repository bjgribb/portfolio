import React, { Component } from 'react'

export default class Portfolio extends Component {
  render () {
    return (
      <section className='portfolio-section section mb-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-4'>
              <div className='heading'>
                <h3><b>Portfolio</b></h3>
                <h6 className='font-lite-black'><b>MY WORK</b></h6>
              </div>
            </div>
            {/* <div className='col-sm-8'>
              <div className='portfolioFilter clearfix margin-b-80'>
                <a href='#' data-filter='*' className='current'><b>ALL</b></a>
                <a href='#' data-filter='.web-design'><b>WEB DESIGN</b></a>
                <a href='#' data-filter='.branding'><b>BRANDING</b></a>
                <a href='#' data-filter='.graphic-design'><b>GRAPHIC DESIGN</b></a>
              </div>
            </div> */}
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 mb-3'>
              <a href='https://spotify-me-bg.herokuapp.com/login/' target='_blank'>
                <img src='images/Spotify-Me Screenshot.png' alt /></a>
            </div>
            <div className='col mb-3'>
              <p><strong>Spotify Me</strong> - Worked with Spotify API to allow users to log
                in through Spotify and view their playlists and associated
                tracks. Once users are authorized they have access to track
                meta-data such as danceability, energy and acoustics levels as well as definitions
                of each category.</p>
            </div>
            <div className='col-md-6 mb-3'>
              <a href='https://tcby-flashcards-bg.herokuapp.com/home/' target='_blank'>
                <img src='images/Flashcards Screenshot.png' className='border' /></a>
            </div>
            <div className='col mb-3'>
              <p><strong>TCBY Flashcards</strong> - Project, comprised of two other developers, tasked with building a flashcard app where users can log
              in and create flashcards and quiz themselves. Some of my responsibilities included building API endpoints for AJAX requests during quiz
              mode and implemented user authentication through AllAuth and Gmail API as well as refactoring code to create smooth user interaction.</p>
            </div>
            <div className='col-md-6 mb-3'>
              <a href='http://weecaremore.herokuapp.com/accounts/login/' target='_blank'>
                <img src='images/WeeCare Screenshot.png' className='border' alt /></a>
            </div>
            <div className='col mb-3'>
              <p><strong>WeeCare</strong> - Worked with local daycare client to automate their record keeping process. Built with two other
              developers to implement technical solutions to meet and exceed client requirements. Responsible for full-stack development, creating
              database models and writing comprehensive views to ensure accurate data representation. Built API endpoints for notification requirements,
              created secure user authentication utilizing AllAuth and Gmail API to allow third-party login and implemented separate guardian login and
              automatic summary email. Responsible for deployment and ensuring no issues between local and Heroku servers.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
