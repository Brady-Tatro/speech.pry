import React, { Component } from 'react'
import { Link, hashHistory } from 'react-router'

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
      url: '/api/v1/user'
    }).done(data => {
      this.setState({ speeches: data.speeches })
    })
  }

  render() {
    return (
      <div>
      {this.state.speeches.map((speech) => (
       <li ><Link to={"/userspeeches/" + speech.id}>{speech.title}</Link></li>
    ))}
      </div>
    )
  }
}




export default UserSpeeches;
