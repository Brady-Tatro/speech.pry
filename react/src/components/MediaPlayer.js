import React, { Component } from 'react'
import { Media, controls } from 'react-media-player'
const { PlayPause, CurrentTime, Progress, SeekBar, Duration, MuteUnmute, Volume } = controls
import CommentForm from './CommentForm'

class MediaPlayer extends Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      time: '',
      commentBody: '',
      flash: ''
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ time: document.getElementsByTagName("time")[0].innerText });
  }

  handleFormSubmit(event) {

    let formData = {comment: { time: this.state.time, commentBody: this.state.commentBody}}
    $.ajax({
      type: 'POST',
      url: 'api/v1/comments',
      data: { comment: formData }
    }).success(data =>{
      let message = 'success';
      this.setState({ flash: message });
      console.long('Posted');
    })
  }

  handleChange(event) {
    let nextState = {};
    nextState[event.target.name] = event.target.value;
    this.setState(nextState);
  }

  render() {
    let flash = $('#flash').text();
    return (
      <Media src="https://www.youtube.com/watch?v=WibmcsEGLKo">
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
            </nav>
            <button onClick={this.handleClick}>Comment</button>
            <CommentForm
            handleFormSubmit={this.handleFormSubmit}
            time={this.state.time}
            commentBody={this.state.commentBody}
            />
          </div>
        }
      </Media>
    )
  }
}


export default MediaPlayer;
