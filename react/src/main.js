import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './components/App'
import NewMedia from './components/NewMedia'
import IndexMedia from './components/IndexMedia'
import Speech from './components/Speech'

$(function() {
  ReactDOM.render((
    <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/newmedia" component={NewMedia}/>
    <Route path="/indexmedia" component={IndexMedia}/>
    <Route path="indexmedia/:id" component={Speech}/>
    </Router>
  ), document.getElementById('app'))
});
