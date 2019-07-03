import React, { Component } from 'react'

export default class Intro extends Component {
  render () {
    return (
      <section className='intro-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-1 col-lg-2' />
            <div className='col-md-10 col-lg-8'>
              <div className='intro'>
                <div className='profile-img'><img src='images/BG_headshot_cropped.jpeg' alt /></div>
                <h2><b>Brian Gribbon</b></h2>
                <h4 className='font-yellow'>Junior Developer</h4>
                <ul className='information margin-tb-30'>
                  <li>Something</li>
                  <li>Something</li>
                  <li>Something</li>
                </ul>
                <ul className='social-icons'>
                  <li><a href='#'><i className='ion-social-pinterest' /></a></li>
                  <li><a href='#'><i className='ion-social-linkedin' /></a></li>
                  <li><a href='#'><i className='ion-social-instagram' /></a></li>
                  <li><a href='#'><i className='ion-social-facebook' /></a></li>
                  <li><a href='#'><i className='ion-social-twitter' /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
