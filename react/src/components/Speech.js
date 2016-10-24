import React, { Component } from 'react'
import { Media, controls } from 'react-media-player'
const { PlayPause, CurrentTime, Progress, SeekBar, Duration, MuteUnmute, Volume } = controls
import CommentForm from './CommentForm'

class MediaPlayer extends Component {
  constructor() {
    super();
    this.state = {
      speechId: '',
      userId: '',
      title: '',
      media: 'https://www.youtube.com/watch?v=l9ue0SJs74I',
      fullComment: '',
      time: '',
      comment: '',
      flash: ''
    }
    this.handleCreation = this.handleCreation.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
      this.setState({ media: data.speech.media, title: data.speech.title });
    })
  }

    handleClick(event) {
      this.setState({ time: document.getElementsByTagName("time")[0].innerText });
    }

    handleFormSubmit(event) {

      let formData = { time: this.state.time, comment: this.state.comment, speechId: this.state.speechId, userId: this.state.userId }
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

    handleChange(event) {
      let nextState = {};
      nextState[event.target.name] = event.target.value;
      this.setState(nextState);
    }

  render() {
    return (
      <Media src={this.state.media}>
        {Player =>
          <div className="media">

          {this.state.title}
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
            <button onClick={this.handleClick}>
            <CommentForm
            handleFormSubmit={this.handleFormSubmit}
            time={this.state.time}
            comment={this.state.comment}
            speechId={this.state.speechId}
            userId={this.state.userId}
            />
            </button>
          </div>
        }
      </Media>
    )
  }
}

export default MediaPlayer;
