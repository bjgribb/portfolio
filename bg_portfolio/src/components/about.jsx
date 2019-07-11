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
              <p className='margin-b-20'>Junior web developer with a linguistics background and extensive experience
              working in highly regulated, confidential environments, looking to leverage my skills, knowledge, and
              experience in the development space. Proven ability to work in high-stress situations, managing multiple
              tasks while meeting strict daily deadlines and able to relay complex ideas and processes in a succinct,
              developed manner across multiple business groups. A congenial and enthusiastic team player looking to
              grow and contribute to a team.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
