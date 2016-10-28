import React, { Component } from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import Foundation from 'react-foundation'
import { Media, controls } from 'react-media-player'
const { PlayPause, CurrentTime, Progress, SeekBar, Duration, MuteUnmute, Volume } = controls

class MediaPlayer extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
      <Media src='https://www.youtube.com/watch?v=lhPbSdMvt1s'>
        {Player =>
          <div className="media">
          <div className="row">
            <ul className="breadcrumbs">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/newmedia">Add Speech</NavLink></li>
              <li><NavLink to="/indexmedia">Rate Speeches</NavLink></li>
              <li><NavLink to="/userspeeches">See Your Speeches</NavLink></li>
              <li><NavLink to="/users/sign_in"> Sign In</NavLink></li>
              <li><NavLink to="/users/sign_up"> Sign Up</NavLink></li>
              {this.props.children}
            </ul>
          </div>
          <div className="row">
          <h1>Words From the Creator</h1>
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
            </div>
          </div>
        }
      </Media>
    )
  }
}

export default MediaPlayer;
