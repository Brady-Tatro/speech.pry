import 'babel-polyfill';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './components/App'
import MediaPlayer from './components/MediaPlayer'
import NewMedia from './components/NewMedia'
import IndexMedia from './components/IndexMedia'

$(function() {
  ReactDOM.render((
    <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/showmedia" component={MediaPlayer}/>
    <Route path="/newmedia" component={NewMedia}/>
    <Route path="/indexmedia" component={IndexMedia}/>
    </Router>
  ), document.getElementById('app'))
});
