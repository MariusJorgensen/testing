import React from "react";
import styled from "styled-components";

function Autofocus() {
  return (
    <Wrapper>
      <form>
        <p></p>
        <div>
          <label>
            <input type="text" name="name" autoFocus/>
          </label>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </Wrapper>
  );
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
  p {
    margin-top: 10000px;
  }
  section {
    p {
      font-size: 20px;
    }
  }
`;

export default Autofocus;
