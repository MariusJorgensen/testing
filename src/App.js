import React, { Component } from 'react';
import './App.css';

const random = Math.random().toString(36).substring(3);

class App extends Component {
  render() {
    return (
      <div className="random-string">
          <h1>{random}</h1>
      </div>
    );
  }
}

export default App;
