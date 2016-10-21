import React, { Component } from 'react'
import { hashHistory } from 'react-router'

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
    setInterval(this.getSpeeches, 100000000);
  }

  render() {
    return (
      <div>
      {this.state.speeches.map((speech) => (
       <li ><a href= {hashHistory.push("/api/v1/speeches/" + speech.id)}>{speech.title}</a></li>

    ))}

      </div>
    )
  }
}

export default IndexMedia;
