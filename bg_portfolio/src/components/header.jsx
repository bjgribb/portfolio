import React, { Component } from 'react'

export default class Header extends Component {
  render () {
    return (
      <header>
        <div className='container'>
          <div className='heading-wrapper'>
            <div className='row'>
              <div className='col-sm-6 col-md-6 col-lg-4'>
                <div className='info'>
                  <i className='icon ion-ios-location-outline' />
                  <div className='right-area'>
                    <h5>500 W Woodcroft Pkwy</h5>
                    <h5>Durham, NC 27713</h5>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-6 col-lg-4'>
                <div className='info'>
                  <i className='icon ion-ios-telephone-outline' />
                  <div className='right-area'>
                    <h5>Call Me:</h5>
                    <h6>(919) 914-1341</h6>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-md-6 col-lg-4'>
                <div className='info'>
                  <i className='icon ion-ios-chatboxes-outline' />
                  <div className='right-area'>
                    <h5>Email Me:</h5>
                    <h6>bjgribb@gmail.com</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
