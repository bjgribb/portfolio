import React, { Component } from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

export default class Menu extends Component {
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
      <div className='menu'>
        <ButtonDropdown direction='left' isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret size='sm'>
                  Menu
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem disabled>Action</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    )
  }
}
