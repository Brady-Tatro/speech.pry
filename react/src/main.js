import 'babel-polyfill';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './components/App'
import MediaPlayer from './components/MediaPlayer'
import NewMedia from './components/NewMedia'


$(function() {
  ReactDOM.render((
    <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/showmedia" component={MediaPlayer}/>
    <Route path="/newmedia" component={NewMedia}/>
    </Router>
  ), document.getElementById('app'))
});
