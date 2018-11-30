import React, { Component } from "react";
import styled from "styled-components";
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

class UploadClass extends Component  {
  render () {
    return (
      <Wrapper>
        <FilePond/>
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

export default UploadClass;
