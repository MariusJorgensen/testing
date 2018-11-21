import React from 'react';
import YouTube from 'react-youtube';
import styled from "styled-components";

function Youtube() {
  const opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
  }}
  return (
    <Wrapper>
      <section>
        <h1 className="youtube">
          <YouTube
            videoId="6xfA6BKFVvs"
            opts={opts}
          />
        </h1>
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

export default Youtube;
