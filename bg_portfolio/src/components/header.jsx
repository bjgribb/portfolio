import React, { Component } from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

export default class Header extends Component {
  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }

  toggle () {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  render () {
    return (
      <header>
        <a name='home' />
        <div className='menu header'>
          <ButtonDropdown direction='left' isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret size='sm' color='info'>
              Menu
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem disabled><a href='#home'>Home</a></DropdownItem>
              <DropdownItem disabled><a href='#about'>About Me</a></DropdownItem>
              <DropdownItem disabled><a href='#skills'>Skills</a></DropdownItem>
              <DropdownItem disabled><a href='#portfolio'>Portfolio</a></DropdownItem>
              <DropdownItem disabled><a href='#experience'>Experience</a></DropdownItem>
              <DropdownItem disabled><a href='#education'>Education</a></DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </div>
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
                  <a href='tel:+1-919-914-1341'>
                    <i className='icon ion-ios-telephone-outline' />
                    <div className='right-area'>
                      <h5>Call Me:</h5>
                      <h6>(919) 914-1341</h6>
                    </div>
                  </a>
                </div>
              </div>
              <div className='col-sm-6 col-md-6 col-lg-4'>
                <div className='info'>
                  <a href='mailto:bjgribb@gmail.com'>
                    <i className='icon ion-ios-chatboxes-outline' />
                    <div className='right-area'>
                      <h5>Email Me:</h5>
                      <h6>bjgribb@gmail.com</h6>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
