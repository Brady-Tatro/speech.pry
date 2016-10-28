import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import NavLink from './NavLink'

class NewMedia extends Component {
  constructor(){
    super();
    this.state = {
      speech: '',
      title: '',
      media: '',
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
  handleFormSubmit(event) {
    let formData = { title: this.state.title, media: this.state.media }
    if (this.state.title === '' || this.state.media === ''){
      $.toast('Invalid Fields')
    } else {

    $.ajax({
      type: 'POST',
      url: '/api/v1/speeches',
      data: { speech: formData }
    }).success(data =>{
      $.toast('success');
      hashHistory.push('/');
    }).error(data => {
      $.toast('Please Sign In');
    });
    event.preventDefault();
  }
  }

  handleChange(event) {
    let nextState = {};
    nextState[event.target.name] = event.target.value;
    this.setState(nextState);
  }

  render() {
    return (
      <div>
      <div className="row">
        <ul className="breadcrumbs">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/newmedia">Add Speech</NavLink></li>
          <li><NavLink to="/indexmedia">Rate Speeches</NavLink></li>
          <li><NavLink to="/userspeeches">See Your Speeches</NavLink></li>
        </ul>
      </div>
      <form onSubmit={this.handleFormSubmit}>
      <div className="field row">
      <div className="large-8 columns">
      <input
        type="text"
        placeholder="Name of Speech"
        value={this.title}
        name='title'
        onChange={this.handleChange}
        />
        </div>
        </div>
        <div className="field row">
        <div className="large-8 columns">
        <input
          type="text"
          placeholder="Valid Youtube or Vimeo Link"
          value={this.media}
          name='media'
          onChange={this.handleChange}
          />
          </div>
          </div>
        <div className="submit row">
        <div className="large-8 columns">
          <input type="submit" className="button expanded" value="Submit" />
        </div>
        </div>
        </form>
        </div>
    )
  }
}
export default NewMedia;
