import React, { Component } from 'react'
import MediaList from './MediaList'

class IndexMedia extends Component {
  constructor(){
    super();
    this.state = {
      speeches: '',
      title: '',
      intervalID: ''
    }
    this.getSpeeches = this.getSpeeches.bind(this);
  }

  getSpeeches() {
    $.ajax({
      type: 'GET',
      url: '/api/v1/speeches',
      data: { speeches: data.speeches}

    })
  }

  componentWillMount(){
    this.getSpeeches();
    setInterval(this.getSpeeches, 100000000);
  }

  render() {
    return (
      <div>
      <MediaList
      speeches={this.state.speeches}
      />
      </div>
    )
  }
}

export default IndexMedia;
