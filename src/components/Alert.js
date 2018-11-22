import React, { Component } from "react";
import styled from "styled-components";
import { Alert } from 'react-alert'
import { Button } from 'react-bootstrap'

class AlertClass extends Component  {
  render () {
    return (
      <Wrapper>
        <Alert>
          {alert => (
            <Button
              bsStyle="danger"
              id='the-alert-button'
              onClick={() => {
                alert.show('OUCH!')
              }}
              bsSize = 'large'
            >
              Hit Me
            </Button>
          )}
        </Alert>
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

export default AlertClass;
