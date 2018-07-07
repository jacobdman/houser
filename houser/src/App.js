import React, { Component } from 'react';
import './App.css';

import Routes from './routes'
import Header from './component/Header/Header'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {Routes}
      </div>
    );
  }
}