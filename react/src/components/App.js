import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import Foundation from 'react-foundation'

export default  React.createClass({
  render(){
    return(
      <div className="row">
        <ul className="breadcrumbs">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/newmedia">Add Speech</NavLink></li>
          <li><NavLink to="/indexmedia">Rate Speeches</NavLink></li>
          <li><NavLink to="/userspeeches">See Your Speeches</NavLink></li>
          <li><NavLink to="/users/sign_in"> Sign In</NavLink></li>
          <li id='toggle'><NavLink to="/users/sign_up"> Sign Up</NavLink></li>
          {this.props.children}
        </ul>
      </div>

    )
  }
})
