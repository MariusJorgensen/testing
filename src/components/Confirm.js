import React, { Component } from "react";
import styled from "styled-components";
import { Button } from 'react-bootstrap'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

class Confirm extends Component {
  submit = () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => alert('Click Yes')
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    })
  };

  render() {
    return (
      <Wrapper>
        <div className="container">
          <Button
            bsStyle="danger"
            onClick={this.submit}
            bsSize="large"
          >
            Confirm dialog
          </Button>
        </div>
      </Wrapper>
    );
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

export default Confirm;
