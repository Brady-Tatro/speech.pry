import React, { Component } from 'react'
import { Link, hashHistory } from 'react-router'
import NavLink from './NavLink'

class UserSpeeches extends Component {
  constructor(){
    super();
    this.state = {
      speeches: []
    }
    this.getUserSpeeches = this.getUserSpeeches.bind(this);
  }

  getUserSpeeches() {
    $.ajax({
      method: 'GET',
      url: '/api/v1/members'
    }).done(data => {
      this.setState({ speeches: data.speeches })
    })
  }
  componentWillMount(){
    this.getUserSpeeches();
    setInterval(this.getUserSpeeches, 100000);
  }


  render() {
    return (
      <div>
      <div className="row">
        <ul className="breadcrumbs">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/newmedia">Add Speech</NavLink></li>
          <li><NavLink to="/indexmedia">Rate Speeches</NavLink></li>
          <li><NavLink to="/userspeeches">See Your Speeches</NavLink></li>
        </ul>
      </div>
      <div className="field row">
      <div className="small-3 small-centered columns">
      {this.state.speeches.map((speech) => (
       <ul><Link to={"/userspeeches/" + speech.id}>{speech.title}</Link></ul>
    ))}
    </div>
      </div>
      </div>
    )
  }
}




export default UserSpeeches;
