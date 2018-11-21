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
          <Link to="googlelogin">Goolge Login</Link>
        </li>
        <li>
          <Link to="youtube">YouTube</Link>
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
