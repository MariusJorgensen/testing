import React from "react";
import styled from "styled-components";

const random = Math.random().toString(36).substring(3);

function RandomString() {
  return (
    <Wrapper>
      <div className="title">Random String!</div>
      <section>
        <h1 className="random-String">{random}</h1>
      </section>
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
  section {
    p {
      font-size: 20px;
    }
  }
`;

export default RandomString;
