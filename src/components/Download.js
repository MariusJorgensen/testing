import React, { Component } from "react";
import styled from "styled-components";
import { Button } from 'react-bootstrap'

class DownloadClass extends Component  {
  render () {
    return (
      <Wrapper>
        <a download="cat.jpg" href="img/image.jpg" title="ImageName">
          <Button
            bsStyle="danger"
            id='the-alert-button'
            bsSize = 'large'
          >
            Download a super cool image
          </Button>
        </a>
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

export default DownloadClass;
