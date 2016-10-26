import React, { Component } from 'react'
import { Media, controls } from 'react-media-player'
import { DataSet } from 'vis'
const { PlayPause, CurrentTime, Progress, SeekBar, Duration, MuteUnmute, Volume } = controls


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
            {this.state.flash}
            <div>
            {this.state.comments.map((comment) => (
            <li>{comment.time},{comment.comment}</li>
          ))}
            </div>

          </div>
        }
      </Media>
    )
  }
}

export default MediaPlayer;
