import React, { Component } from 'react'

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
      <li key={speech.id}>{speech.title}</li>
    ))}
      </div>
    )
  }
}

export default IndexMedia;
