import React, { Component } from 'react'
import {
  CircularProgressbar,
  buildStyles
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default class Skills extends Component {
  render () {
    return (

      <section className='about-section section'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-4'>
              <div className='heading'>
                <h3><b>Skills</b></h3>
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
                          textColor: '#333333',
                          pathColor: '#887392',
                          trailColor: '#FFA804'
                        })}
                      />
                      <div />
                      <h6 className='progress-title'>HTML5 &amp; CSS3</h6>
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
                          textColor: '#333333',
                          pathColor: '#887392',
                          trailColor: '#FFA804'
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
                        value={80}
                        text={`80%`}
                        styles={buildStyles({
                          textColor: '#333333',
                          pathColor: '#887392',
                          trailColor: '#FFA804'
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
                        value={80}
                        text={`80%`}
                        styles={buildStyles({
                          textColor: '#333333',
                          pathColor: '#887392',
                          trailColor: '#FFA804'
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
                        value={80}
                        text={`80%`}
                        styles={buildStyles({
                          textColor: '#333333',
                          pathColor: '#887392',
                          trailColor: '#FFA804'
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
                        value={60}
                        text={`60%`}
                        styles={buildStyles({
                          textColor: '#333333',
                          pathColor: '#887392',
                          trailColor: '#FFA804'
                        })}
                      />
                      <div />
                      <h6 className='progress-title'>Javascript</h6>
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
