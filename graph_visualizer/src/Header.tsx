import React from 'react';
import styled from 'styled-components';

const Div = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #202e3e;
  color: white;
  .left-logo {
    position: absolute;
    left: 10px;
    font-size: 20px;
    font-weight: bold;
  }
  .right-box {
    position: absolute;
    right: 10px;
    display: inline-block;
    ul {
      list-style-type: none;
    }
    li {
      display: inline-block;
    }
    a {
      margin: 10px;
      color: white;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
      font-weight: bold;
      font-size: 15px;
      text-decoration: none;
    }
  }
`;

const isLoggedIn = true; // Replace 'true' with your actual login check logic
const userID = "amsminn"; // Replace 'JohnDoe' with the actual user's name

function Header() {
  return (
    <Div className="header">
        <div className="left-logo">Graph Visualizer</div>
        <div className="right-box"> 
          <ul className="menu">
            <li><a href="www.naver.com">CLOUD</a></li>
            {isLoggedIn ? (<li><a href="www.naver.com">{userID.toUpperCase()}</a></li>) : 
            (<React.Fragment><li><a href="www.naver.com">LOGIN</a></li><li><a href="www.naver.com">SIGNUP</a></li></React.Fragment>)}
          </ul>
        </div>  
    </Div>
  );
}

export default React.memo(Header);