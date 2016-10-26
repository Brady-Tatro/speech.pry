import React, { Component } from 'react'
import { Link, hashHistory } from 'react-router'
import NavLink from './NavLink'

class IndexMedia extends Component {
  constructor(){
    super();
    this.state = {
      speeches: [],
      title: '',
      intervalID: ''
    }
    this.getSpeeches = this.getSpeeches.bind(this);
  }

  getSpeeches() {
    $.ajax({
      method: 'GET',
      url: '/api/v1/speeches'
    }).done(data => {
      this.setState({ speeches: data.speeches })
    })
  }

  componentWillMount(){
    this.getSpeeches();
    setInterval(this.getSpeeches, 100000);
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
       <ul><Link to={"/indexmedia/" + speech.id}>{speech.title}</Link></ul>
    ))}
    </div>
    </div>

      </div>
    )
  }
}

export default IndexMedia;
