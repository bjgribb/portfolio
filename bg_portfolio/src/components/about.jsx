import React, { Component } from 'react'

export default class About extends Component {
  render () {
    return (
      <section className='about-section section mb-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-4'>
              <div className='heading'>
                <h3><b>About me</b></h3>
                <h6 className='font-lite-black'><b>WHO AM I?</b></h6>
              </div>
            </div>
            <div className='col-sm-8'>
              <p className='margin-b-20'>Hi there!  I am a finance professional with 6 years of experience, occupying roles from telling
              to strategic analysis.  I've always been a fanatic for technology and what better time to be alive!
              If you told 6-year-old me, that we'd have smartwatches and smartphones at our disposal I'd assume I was an
              international spy!  I love how impactful technology is and how it can be used to solve everyday
              issues as well as extremely complex problems. In my last finance role, I was exposed to some analytic tools
              such as Tableau, Alteryx, and Business Objects.  I was amazed at how powerful these tools were in driving key
              business decisions, and how quickly we could build insightful dashboards and models.  I had been learning
              some programming on my own via all the amazing online resources, but finally decided to pursue my passion for
              technology full-time and enrolled in a local code school learning Python/Django.
              There's so much to learn and if there's one thing I want from my career, it's to never stop learning.
              I'm looking forward to working in the tech space, learning from others and building great things!</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
