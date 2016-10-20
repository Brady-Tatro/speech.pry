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
      <Media src="https://www.youtube.com/watch?v=n0hPEeGXnxw&list=PLKG--4mRoNpBn8WvKrLdNLkTxrqjx0hue&index=31">
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
