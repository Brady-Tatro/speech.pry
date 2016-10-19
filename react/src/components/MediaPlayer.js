import React, { Component } from 'react'
import { Media, controls } from 'react-media-player'
const { PlayPause, CurrentTime, Progress, SeekBar, Duration, MuteUnmute, Volume, Fullscreen } = controls

class MediaPlayer extends Component {
  constructor() {
    super();
    this.state = {
      like: "engaged"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({like: <CurrentTime/>});
  }
  render() {
    return (
      <Media src="http://www.youtube.com/embed/h3YVKTxTOgU">
        {Player =>
          <div className="media">
            <div className="media-player">
              {Player}
            </div>
            <nav className="media-controls">
            <PlayPause/>
            <CurrentTime/>
            <SeekBar/>
            <Duration/>
            <MuteUnmute/>
            <Volume/>
            <Fullscreen/>
            </nav>
            <button onClick={this.handleClick}>
            {this.state.like}
            </button>
            <p><CurrentTime/></p>
          </div>
        }
      </Media>
    )
  }
}


export default MediaPlayer;
