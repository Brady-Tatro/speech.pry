import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default  React.createClass({
  render(){
    return(
      <div>
      <ul role="nav" className="navbar">
      <li><NavLink to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</NavLink></li>
      <li><NavLink to="/showmedia">See Speech</NavLink></li>
      <li><NavLink to="/newmedia">Add Speech</NavLink></li>
      </ul>
      {this.props.children}
      </div>
    )
  }
})
