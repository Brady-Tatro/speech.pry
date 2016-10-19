import 'babel-polyfill';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MediaPlayer from './components/MediaPlayer'




$(function() {
  ReactDOM.render(
    <MediaPlayer />,
    document.getElementById('app')
  );
});
