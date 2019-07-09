import React, { Component } from 'react'

export default class Education extends Component {
  render () {
    return (
      <section className='education-section section'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-4'>
              <div className='heading'>
                <h3><b>Education</b></h3>
                <h6 className='font-lite-black'><b>TRAINING</b></h6>
              </div>
            </div>
            <div className='col-sm-8'>
              <div className='education-wrapper'>
                <div className='education margin-b-50'>
                  <h4><b>FULL STACK DEVELOPER CERTIFICATE</b></h4>
                  <h5 className='font-yellow'><b>MOMENTUM LEARNING</b></h5>
                  <h6 className='font-lite-black margin-t-10'>FEBRUARY 2019 - MAY 2019</h6>
                  {/* <p className='margin-tb-30'>Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit,
                        quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu,
                        eu mollis tellus. Sed finibus aliquam neque sit amet sodales. </p> */}
                </div>
                <div className='education margin-b-50'>
                  <h4><b>BDC PROFESSIONAL PROGRAM</b></h4>
                  <h5 className='font-yellow'><b>CREDIT SUISSE</b></h5>
                  <h6 className='font-lite-black margin-t-10'>MARCH 2016 - MARCH 2017</h6>
                  {/* <p className='margin-tb-30'>Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit,
                        quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu,
                        eu mollis tellus. Sed finibus aliquam neque sit amet sodales. </p> */}
                </div>
                <div className='education margin-b-50'>
                  <h4><b>BACHELORS BIOLOGY, MINOR LINGUISTICS</b></h4>
                  <h5 className='font-yellow'><b>UNIVERSITY OF NORTH CAROLINA - CHAPEL HILL</b></h5>
                  <h6 className='font-lite-black margin-t-10'>AUGUST 2008 - MAY 2012</h6>
                  {/* <p className='margin-tb-30'>Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque sit amet sodales.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus pellentes que velit,
                        quis consequat nulla effi citur at. Maecenas sed massa tristique.Duis non volutpat arcu,
                        eu mollis tellus. Sed finibus aliquam neque sit amet sodales. </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
