// import React, { Component } from 'react'
// import { Media, controls } from 'react-media-player'
// const { PlayPause, CurrentTime, Progress, SeekBar, Duration, MuteUnmute, Volume } = controls
// import CommentForm from './CommentForm'
// import NewMedia from './NewMedia'
//
// class MediaPlayer extends Component {
//   constructor() {
//     super();
//     this.state = {
//       fullComment: '',
//       time: '',
//       comment: '',
//       flash: ''
//     };
//     this.handleFormSubmit = this.handleFormSubmit.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }
//
//   handleClick(event) {
//     this.setState({ time: document.getElementsByTagName("time")[0].innerText });
//   }
//
//   handleFormSubmit(event) {
//
//     let formData = { time: this.state.time, comment: this.state.comment}
//     $.ajax({
//       type: 'POST',
//       url: '/api/v1/comments',
//       data: { fullComment: formData }
//     }).success(data =>{
//       let message = 'success';
//       this.setState({ flash: message });
//       console.log('Posted');
//     }).error(data => {
//       let message = 'Invalid fields';
//       this.setState({ flash: message });
//       console.log(data);
//     });
//      event.preventDefault();
//   }
//
//   handleChange(event) {
//     let nextState = {};
//     nextState[event.target.name] = event.target.value;
//     this.setState(nextState);
//   }
//
//   render() {
//     let flash = $('#flash').text();
//     let media = "https://www.youtube.com/watch?v=WibmcsEGLKo"
//     return (
//       <Media src={media}>
//         {Player =>
//           <div className="media">
//             <div className="media-player">
//               {Player}
//             </div>
//             <nav className="media-controls">
//             <PlayPause/>
//             <CurrentTime/>
//             <SeekBar/>
//             <Duration/>
//             <MuteUnmute/>
//             <Volume/>
//             {this.state.flash}
//             </nav>
//
//           </div>
//         }
//       </Media>
//     )
//   }
// }
//
//
// export default MediaPlayer;
