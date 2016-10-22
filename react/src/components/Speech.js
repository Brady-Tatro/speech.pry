import React, { Component } from 'react'
import { Media, controls } from 'react-media-player'
const { PlayPause, CurrentTime, Progress, SeekBar, Duration, MuteUnmute, Volume } = controls

class MediaPlayer extends Component {
  constructor() {
    super();
    this.state = {
      speech: '',
      title: '',
      media: 'https://www.youtube.com/watch?v=n0hPEeGXnxw'
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
      this.setState({ media: data.speech.media })
      this.setState({ title: data.speech.title })
    })
  }
  render() {
    return (
      <Media src={this.state.media}>
        {Player =>
          <div className="media">
            <div className="media-player">
              {Player}
            </div>
            <div className="media-controls">
            <PlayPause/>
            <CurrentTime/>
            <SeekBar/>
            <Duration/>
            <MuteUnmute/>
            <Volume/>
            </div>
          </div>
        }
      </Media>
    )
  }
}

export default MediaPlayer;
