import React, { Component } from 'react';
import Moment from 'react-moment';
import logo from './logo.svg';
import './App.css';

const now = Date.now()

class App extends Component {
  render() {
    return (
      <div className="Time">
          <Moment format="HH:mm:ss">{now}</Moment>
      </div>
    );
  }
}

export default App;
