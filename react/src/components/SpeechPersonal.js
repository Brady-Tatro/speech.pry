import React, { Component } from 'react'
import { Media, controls } from 'react-media-player'
const { PlayPause, CurrentTime, Progress, SeekBar, Duration, MuteUnmute, Volume } = controls
import NavLink from './NavLink'
import VoteGraph from './VoteGraph'

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
          <div className="twelve columns text-center">
          <h1>{this.state.title}</h1>
          </div>
          </div>
            <div className="media-player">
            <div className="row">
            <div className="twelve columns text-center">
              {Player}
              </div>
              </div>
            </div>
            <div className="media-controls">
            <div className="row">
            <div className="twelve columns text-center">
            <PlayPause className="button tiny"/>
            <CurrentTime/>
            <SeekBar/>
            <Duration/>
            <MuteUnmute className="button tiny"/>
            <Volume/>
            </div>
            </div>
            <div className="row">
            <div className="twelve columns text-center">
            <VoteGraph
            comments={this.state.comments}
          />
            </div>
            </div>
            </div>
          </div>
        }
      </Media>
    )
  }
}

export default MediaPlayer;
