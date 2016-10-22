import React, { Component } from 'react'
import { Media, controls } from 'react-media-player'
const { PlayPause, CurrentTime, Progress, SeekBar, Duration, MuteUnmute, Volume } = controls

class MediaPlayer extends Component {
  constructor() {
    super();
    this.state = {
      speech: '',
      title: '',
      media: ''
    }
    this.handleCreation = this.handleCreation.bind(this);
  }

  handleCreation() {
    $.ajax({
      method: 'GET',
      url: `/api/v1/speeches/${speech.id}`
    })
  }

  render() {
    return (
      <Media src="http://www.youtube.com/embed/h3YVKTxTOgU">
        {Player =>
          <div className="media">
            <div className="media-player">
              {Player}
            </div>
            <div className="media-controls">
            <PlayPause/>
            <CurrentTime/>
            <Progress/>
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
