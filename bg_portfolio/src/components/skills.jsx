import React, { Component } from 'react'
import {
  CircularProgressbar,
  buildStyles
} from 'react-circular-progressbar'
import PieChart from 'react-minimal-pie-chart'
import 'react-circular-progressbar/dist/styles.css'
import VisibilitySensor from 'react-visibility-sensor'

export default class Skills extends Component {
  render () {
    return (

      <section className='skills-section section'>
        <a name='skills' />
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
                      <VisibilitySensor>
                        {({ isVisible }) => {
                          return (
                            <PieChart
                              data={[
                                {
                                  title: 'One',
                                  value: 10,
                                  color: '#E38627'
                                },
                                {
                                  title: 'Two',
                                  value: 15,
                                  color: '#C13C37'
                                },
                                {
                                  title: 'Three',
                                  value: 20,
                                  color: '#6A2135'
                                }
                              ]}
                              label
                              labelStyle={{
                                fontSize: '5px',
                                fontFamily: 'sans-serif',
                                fill: '#121212'
                              }}
                              animate
                            />
                          )
                        }}
                      </VisibilitySensor>
                      <div />
                      <h6 className='progress-title'>HTML &amp; CSS</h6>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-4'>
                  <div className='radial-prog-area margin-b-30'>
                    <div className='radial-progress'>
                      <VisibilitySensor>
                        {({ isVisible }) => {
                          const percentage = isVisible ? 80 : 0
                          return (
                            <CircularProgressbar
                              value={percentage}
                              text={`80%`}
                              styles={buildStyles({
                                pathTransitionDuration: 1,
                                textColor: '#FFFFFF',
                                pathColor: '#FFA600',
                                trailColor: '#777777'
                              })}
                            />
                          )
                        }}
                      </VisibilitySensor>
                      <div />
                      <h6 className='progress-title'>Python</h6>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-4'>
                  <div className='radial-prog-area margin-b-30'>
                    <div className='radial-progress'>
                      <VisibilitySensor>
                        {({ isVisible }) => {
                          const percentage = isVisible ? 65 : 0
                          return (
                            <CircularProgressbar
                              value={percentage}
                              text={`65%`}
                              styles={buildStyles({
                                pathTransitionDuration: 1,
                                textColor: '#FFFFFF',
                                pathColor: '#FFA600',
                                trailColor: '#777777'
                              })}
                            />
                          )
                        }}
                      </VisibilitySensor>
                      <div />
                      <h6 className='progress-title'>SQL</h6>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-4'>
                  <div className='radial-prog-area margin-b-30'>
                    <div className='radial-progress'>
                      <VisibilitySensor>
                        {({ isVisible }) => {
                          const percentage = isVisible ? 55 : 0
                          return (
                            <CircularProgressbar
                              value={percentage}
                              text={`55%`}
                              styles={buildStyles({
                                pathTransitionDuration: 1,
                                textColor: '#FFFFFF',
                                pathColor: '#FFA600',
                                trailColor: '#777777'
                              })}
                            />
                          )
                        }}
                      </VisibilitySensor>
                      <div />
                      <h6 className='progress-title'>JavaScript</h6>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-4'>
                  <div className='radial-prog-area margin-b-30'>
                    <div className='radial-progress'>
                      <VisibilitySensor>
                        {({ isVisible }) => {
                          const percentage = isVisible ? 40 : 0
                          return (
                            <CircularProgressbar
                              value={percentage}
                              text={`40%`}
                              styles={buildStyles({
                                pathTransitionDuration: 1,
                                textColor: '#FFFFFF',
                                pathColor: '#FFA600',
                                trailColor: '#777777'
                              })}
                            />
                          )
                        }}
                      </VisibilitySensor>
                      <div />
                      <h6 className='progress-title'>ReactJs</h6>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-4'>
                  <div className='radial-prog-area margin-b-30'>
                    <div className='radial-progress'>
                      <VisibilitySensor>
                        {({ isVisible }) => {
                          const percentage = isVisible ? 50 : 0
                          return (
                            <CircularProgressbar
                              value={percentage}
                              text={`50%`}
                              styles={buildStyles({
                                pathTransitionDuration: 1,
                                textColor: '#FFFFFF',
                                pathColor: '#FFA600',
                                trailColor: '#777777'
                              })}
                            />
                          )
                        }}
                      </VisibilitySensor>
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
