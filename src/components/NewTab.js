import React, { Component } from "react";
import styled from "styled-components";
import { Alert } from 'react-alert'
import { Button } from 'react-bootstrap'

class NewTab extends Component  {
  render () {
    return (
      <Wrapper>
            <Button
              bsStyle="danger"
              id='newtab-button'
              bsSize = 'large'
            >
              <a style={{display: "table-cell"}} href="https://google.com" target="_blank">OPEN I NEW TAB</a>
            </Button>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  background-color: #333;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  div.title {
    font-size: 40px;
    font-weight: bold;
  }
  section {
    p {
      font-size: 20px;
    }
  }
`;

export default NewTab;
