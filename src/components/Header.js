import React from "react";
import styled from "styled-components";
import { Link, HashRouter } from "react-router-dom";

function Header() {
  return (
    <Wrapper>
      <ul>
        <HashRouter basename="/"/>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="randomstring">Random String</Link>
        </li>
        <li>
          <Link to="form">Form</Link>
        </li>
        <li>
          <Link to="googlelogin">Google Login</Link>
        </li>
        <li>
          <Link to="youtube">YouTube</Link>
        </li>
        <li>
          <Link to="alert">Alert</Link>
        </li>
        <li>
          <Link to="confirm">Confirm</Link>
        </li>
        <li>
          <Link to="download">Download</Link>
        </li>
        <li>
          <Link to="upload">Upload</Link>
        </li>
        <li>
          <Link to="video">Video</Link>
        </li>
        <li>
          <Link to="newtab">NewTab</Link>
        </li>
        <li>
          <Link to="autofocus">Autofocus</Link>
        </li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    margin-left: 20px;

    a {
      text-decoration: none;
      font-size: 20px;
      color: #333;
    }
  }
`;

export default Header;
