import React, { Component } from 'react'
import { Media, controls } from 'react-media-player'
import { DataSet } from 'vis'
const { PlayPause, CurrentTime, Progress, SeekBar, Duration, MuteUnmute, Volume } = controls
import NavLink from './NavLink'

class MediaPlayer extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      media: 'https://www.youtube.com/watch?v=l9ue0SJs74I',
      comments: []
    }
    this.handleCreation = this.handleCreation.bind(this);
  }

  handleCreation() {
    $.ajax({
      method: 'GET',
      url: `/api/v1/speeches/${speech.id}`
    })
  }

  componentWillMount() {
    $.ajax({
      method: 'GET',
      url: `/api/v1/speeches/${this.props.params.id}`
    }).success(data => {
      this.setState({ media: data.speech.media, title: data.speech.title, comments: data.comment});
    })
  }

  render() {
    return (
      <Media src={this.state.media}>
        {Player =>
          <div className="media">
          <div className="row">
            <ul className="breadcrumbs">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/newmedia">Add Speech</NavLink></li>
              <li><NavLink to="/indexmedia">Rate Speeches</NavLink></li>
              <li><NavLink to="/userspeeches">See Your Speeches</NavLink></li>
            </ul>
          </div>
          <div className="row">
          <h1>{this.state.title}</h1>
          </div>
            <div className="media-player">
            <div className="row">
              {Player}
              </div>
            </div>
            <div className="media-controls">
            <div className="row">
            <PlayPause/>
            <CurrentTime/>
            <SeekBar/>
            <Duration/>
            <MuteUnmute/>
            <Volume/>
            </div>
            {this.state.flash}
            <div>
            {this.state.comments.map((comment) => (
            <li>{comment.time},{comment.comment}</li>
          ))}
            </div>
            </div>
          </div>
        }
      </Media>
    )
  }
}

export default MediaPlayer;
