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
              <div>
                <div className='margin-b-30'>
                  <div>
                    <VisibilitySensor>
                      {({ isVisible }) => {
                        return (
                          <PieChart
                            data={[
                              {
                                title: 'Python',
                                value: 10,
                                color: '#E38627'
                              },
                              {
                                title: 'HTML & CSS',
                                value: 15,
                                color: '#C13C37'
                              },
                              {
                                title: 'SQL',
                                value: 20,
                                color: '#6A2135'
                              },
                              {
                                title: 'JavaScript',
                                value: 20,
                                color: '#FFFFFF'
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
