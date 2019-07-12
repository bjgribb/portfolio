import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import VisibilitySensor from 'react-visibility-sensor'

export default class Portfolio extends Component {
  render () {
    return (
      <section className='portfolio-section section mb-5'>
        <a name='portfolio' />
        <div className='container'>
          <div className='row'>
            <div className='col-sm-4'>
              <div className='heading'>
                <h3><b>Portfolio</b></h3>
                <h6 className='font-lite-black'><b>MY WORK</b></h6>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 mb-3'>
              <Fade left>
                <img src='images/Spotify-Me Screenshot.png' alt />
              </Fade>
            </div>
            <div className='col mb-3'>
              <Fade right>
                <p><a href='https://spotify-me-bg.herokuapp.com/login/' target='_blank'><strong>Spotify Me</strong></a> - I
                love Spotify, in particular their curated playlists and music discovery options. Spotify assigns meta-data
                to each track covering values like danceability and energy levels. Users can login in via their spotify
                and see their playlists and associated tracks. Upon clicking a track, users can view some of the track
                meta-data Spotify provides as well as definitions of how that data is sourced.</p>
                <p>
                  <a href='https://github.com/bjgribb/musicdata' target='_blank'>
                    <strong>Source Code</strong>
                  </a>
                </p>
              </Fade>
            </div>
            <div className='col-md-6 mb-3'>
              <Fade left>
                <img src='images/Flashcards Screenshot.png' className='border' />
              </Fade>
            </div>
            <div className='col mb-3'>
              <Fade right>
                <p><a href='https://tcby-flashcards-bg.herokuapp.com/home/' target='_blank'><strong>TCBY Flashcards</strong></a> - Project,
                 comprised of two other developers, tasked with building a flashcard app where users can log in and create flashcards
                 and quiz themselves. Some of my responsibilities included building API endpoints for AJAX requests during quiz
                 mode and implemented user authentication through AllAuth and Gmail API as well as refactoring code to create smooth user interaction.</p>
                <p>
                  <a href='https://github.com/bjgribb/TCBY_flashcards_bg' target='_blank'>
                    <strong>Source Code</strong>
                  </a>
                </p>
              </Fade>
            </div>
            <div className='col-md-6 mb-3'>
              <Fade left>
                <img src='images/WeeCare Screenshot.png' className='border' alt />
              </Fade>
            </div>
            <div className='col mb-3'>
              <Fade right>
                <p><a href='http://weecaremore.herokuapp.com/accounts/login/' target='_blank'><strong>WeeCare</strong></a> - Worked
                with local daycare client to automate their record keeping process. Built with two other developers to implement
                technical solutions to meet and exceed client requirements. Responsible for full-stack development, creating
                database models and writing comprehensive views to ensure accurate data representation. Built API endpoints for
                notification requirements, created secure user authentication utilizing AllAuth and Gmail API to allow third-party
                login and implemented separate guardian login and automatic summary email. Responsible for deployment and ensuring
                no issues between local and Heroku servers.</p>
                <p>
                  <a href='https://github.com/in-n-out-daycare/synCARE' target='_blank'>
                    <strong>Source Code</strong>
                  </a>
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
