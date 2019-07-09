import React, { Component } from 'react'
import {
  CircularProgressbar,
  buildStyles
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default class Skills extends Component {
  render () {
    return (

      <section className='skills-section section'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-4'>
              <div className='heading'>
                <h3><b>Skills</b></h3>
                <h6 className='font-lite-black'><b>PROFICIENCY</b></h6>
              </div>
            </div>
            <div className='col-sm-8'>
              <div className='row'>
                <div className='col-sm-6 col-md-6 col-lg-4'>
                  <div className='radial-prog-area margin-b-30'>
                    <div className='radial-progress'>
                      <CircularProgressbar
                        value={85}
                        text={`85%`}
                        styles={buildStyles({
                          textColor: '#FFFFFF',
                          pathColor: '#FFA600',
                          trailColor: '#777777'
                        })}
                      />
                      <div />
                      <h6 className='progress-title'>HTML &amp; CSS</h6>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-4'>
                  <div className='radial-prog-area margin-b-30'>
                    <div className='radial-progress'>
                      <CircularProgressbar
                        value={80}
                        text={`80%`}
                        styles={buildStyles({
                          textColor: '#FFFFFF',
                          pathColor: '#FFA600',
                          trailColor: '#777777'
                        })}
                      />
                      <div />
                      <h6 className='progress-title'>Python</h6>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-4'>
                  <div className='radial-prog-area margin-b-30'>
                    <div className='radial-progress'>
                      <CircularProgressbar
                        value={65}
                        text={`65%`}
                        styles={buildStyles({
                          textColor: '#FFFFFF',
                          pathColor: '#FFA600',
                          trailColor: '#777777'
                        })}
                      />
                      <div />
                      <h6 className='progress-title'>SQL</h6>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-4'>
                  <div className='radial-prog-area margin-b-30'>
                    <div className='radial-progress'>
                      <CircularProgressbar
                        value={55}
                        text={`55%`}
                        styles={buildStyles({
                          textColor: '#FFFFFF',
                          pathColor: '#FFA600',
                          trailColor: '#777777'
                        })}
                      />
                      <div />
                      <h6 className='progress-title'>JavaScript</h6>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-4'>
                  <div className='radial-prog-area margin-b-30'>
                    <div className='radial-progress'>
                      <CircularProgressbar
                        value={40}
                        text={`40%`}
                        styles={buildStyles({
                          textColor: '#FFFFFF',
                          pathColor: '#FFA600',
                          trailColor: '#777777'
                        })}
                      />
                      <div />
                      <h6 className='progress-title'>ReactJs</h6>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-4'>
                  <div className='radial-prog-area margin-b-30'>
                    <div className='radial-progress'>
                      <CircularProgressbar
                        value={50}
                        text={`50%`}
                        styles={buildStyles({
                          textColor: '#FFFFFF',
                          pathColor: '#FFA600',
                          trailColor: '#777777'
                        })}
                      />
                      <div />
                      <h6 className='progress-title'>Tableau</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
