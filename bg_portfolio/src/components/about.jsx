import React, { Component } from 'react'

export default class About extends Component {
  render () {
    return (
      <section className='about-section section'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-4'>
              <div className='heading'>
                <h3><b>About me</b></h3>
                <h6 className='font-lite-black'><b>PROFESSIONAL PATH</b></h6>
              </div>
            </div>{/* col-sm-4 */}
            <div className='col-sm-8'>
              <p className='margin-b-50'>Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque
                sit amet sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla maximus pellentes que velit, quis consequat nulla effi citur at.
                Maecenas sed massa tristique.Duis non volutpat arcu, eu mollis tellus.
                Sed finibus aliquam neque sit amet sodales. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nulla maximus pellentes que velit, quis consequat nulla
                effi citur at.Maecenas sed massa tristique.</p>
              <div className='row'>
                <div className='col-sm-6 col-md-6 col-lg-3'>
                  <div className='radial-prog-area margin-b-30'>
                    <div className='radial-progress' data-prog-percent='.97'>
                      <div />
                      <h6 className='progress-title'>HTML5 &amp; CSS3</h6>
                    </div>
                  </div>{/* radial-prog-area */}
                </div>{/* col-sm-6 */}
                <div className='col-sm-6 col-md-6 col-lg-3'>
                  <div className='radial-prog-area margin-b-30'>
                    <div className='radial-progress' data-prog-percent='.78'>
                      <div />
                      <h6 className='progress-title'>WEB DESIGN</h6>
                    </div>
                  </div>{/* radial-prog-area */}
                </div>{/* col-sm-6 */}
                <div className='col-sm-6 col-md-6 col-lg-3'>
                  <div className='radial-prog-area margin-b-30'>
                    <div className='radial-progress' data-prog-percent='.67'>
                      <div />
                      <h6 className='progress-title'>JAVA</h6>
                    </div>
                  </div>{/* radial-prog-area */}
                </div>{/* col-sm-6 */}
                <div className='col-sm-6 col-md-6 col-lg-3'>
                  <div className='radial-prog-area margin-b-50'>
                    <div className='radial-progress' data-prog-percent='.97'>
                      <div />
                      <h6 className='progress-title'>PHP</h6>
                    </div>
                  </div>{/* radial-prog-area */}
                </div>{/* col-sm-6 */}
              </div>{/* row */}
            </div>{/* col-sm-8 */}
          </div>{/* row */}
        </div>{/* container */}
      </section>
    )
  }
}
