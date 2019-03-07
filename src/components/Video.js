import React from 'react';
import styled from "styled-components";

function Video() {
  const onClick=()=> document.querySelector("#unicorn").webkitRequestFullscreen();
  return (
    <Wrapper>
      <video id="unicorn" src="img/IMG_8117.MOV" autoPlay muted loop/>
      <button id='fullscreen-button' onClick={onClick}>FULLSCREEN</button>
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
  video {
    height: 700px;
  }
`;

export default Video;
