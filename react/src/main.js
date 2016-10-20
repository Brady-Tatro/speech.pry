import 'babel-polyfill';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MediaPlayer from './components/MediaPlayer'
import { Router, Route, hashHistory } from 'react-router'



$(function() {
  ReactDOM.render((
    <Router history={hashHistory}>
    <Route path="/" component={MediaPlayer}/>
    </Router>
  ), document.getElementById('app'))
});
