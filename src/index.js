import React, { Component } from 'react'
import { render } from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'
import "./global-styles";

import Header from "./components/Header";
import Container from "./components/Container";

const options = {
  position: 'bottom center',
  timeout: 5000,
  offset: '100px',
  transition: 'scale'
}

class Root extends Component  {
  render () {
    return (
      <AlertProvider template={AlertTemplate} {...options}>
        <Router>
          <div>
            <Header />
            <Container />
          </div>
        </Router>
      </AlertProvider>
    )
  }
}

render(<Root />, document.getElementById("root"));
