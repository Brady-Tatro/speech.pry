import React, { Component } from 'react'
import { hashHistory } from 'react-router'
class NewMedia extends Component {
  constructor(){
    super();
    this.state = {
      speech: '',
      title: '',
      media: '',
      flash: '',
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
  handleFormSubmit(event) {
    let formData = { title: this.state.title, media: this.state.media }
    $.ajax({
      type: 'POST',
      url: '/api/v1/speeches',
      data: { speech: formData }
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
    hashHistory.push('/');
  }

  handleChange(event) {
    let nextState = {};
    nextState[event.target.name] = event.target.value;
    this.setState(nextState);
  }

  render() {
    let flash = $('#flash').text();
    return (
      <form onSubmit={this.handleFormSubmit}>
      <div className="field">
      <input
        type="text"
        value={this.title}
        name='title'
        onChange={this.handleChange}
        />
        </div>
        <div className="field">
        <input
          type="text"
          value={this.media}
          name='media'
          onChange={this.handleChange}
          />
          </div>
        <div className="submit">
          <input type="submit" value="Submit" />
        </div>
        </form>
    )
  }
}
export default NewMedia;
