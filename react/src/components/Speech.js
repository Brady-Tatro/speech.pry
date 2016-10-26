import React, { Component } from 'react'
import { Media, controls } from 'react-media-player'
const { PlayPause, CurrentTime, Progress, SeekBar, Duration, MuteUnmute, Volume } = controls
import CommentForm from './CommentForm'
import CommentFormDown from './CommentFormDown'
import NavLink from './NavLink'


class MediaPlayer extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      media: 'https://www.youtube.com/watch?v=l9ue0SJs74I',
      fullComment: '',
      speechId: '',
      time: '',
      comment: 'upvote',
      flash: ''
    }
    this.handleCreation = this.handleCreation.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFormSubmitdown = this.handleFormSubmitdown.bind(this);
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
      this.setState({ media: data.speech.media, title: data.speech.title, speechId: data.speech.id });
    })
  }

    handleClick(event) {
      this.setState({ time: document.getElementsByTagName("time")[0].innerText });
    }

    handleFormSubmit(event) {
      let formData = { time: this.state.time, comment: this.state.comment, speechId: this.state.speechId }
      $.ajax({
        type: 'POST',
        url: '/api/v1/comments',
        data: { fullComment: formData }
      }).success(data =>{
        let message = 'success';
        this.setState({ flash: message });
        console.log('Posted');
      }).error(data => {
        let message = 'Invalid fields';
        this.setState({ flash: message });
        console.log(data);
      });
       event.preventDefault();
    }

    handleFormSubmitdown(event) {
      let formData = { time: this.state.time, comment: "downvote", speechId: this.state.speechId}
      $.ajax({
        type: 'POST',
        url: '/api/v1/comments',
        data: { fullComment: formData }
      }).success(data =>{
        let message = 'success';
        this.setState({ flash: message });
        console.log('Posted');
      }).error(data => {
        let message = 'Invalid fields';
        this.setState({ flash: message });
        console.log(data);
      });
       event.preventDefault();
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
            <div className="row">
            <button onClick={this.handleClick}>
            <CommentForm
            handleFormSubmit={this.handleFormSubmit}
            time={this.state.time}
            comment={this.state.comment}
            />
            </button>
            <button onClick={this.handleClick}>
            <CommentFormDown
            handleFormSubmitdown={this.handleFormSubmitdown}
            time={this.state.time}
            comment={this.state.comment}
            />
            </button>
                  {this.state.flash}
          </div>
          </div>
          </div>
        }
      </Media>
    )
  }
}

export default MediaPlayer;
