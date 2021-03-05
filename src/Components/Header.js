import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div>
        <NavLink to='/'>Home</NavLink>
        {
          (!this.props.user || !this.props.user.token) &&
        <>
          <NavLink to='/signup'>Sign Up</NavLink>
          <NavLink to='/login'>Login</NavLink>
        </>
        }
        {        
        this.props.user && this.props.user.token &&
        <>
          <NavLink to='/todos'>List</NavLink>
          <button onClick={this.props.handleLogout}>sign out</button>
        </>
        }
      </div>
    )
  }
}
