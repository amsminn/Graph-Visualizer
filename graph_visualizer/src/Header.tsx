import React, { useContext } from 'react';
import styled from 'styled-components';
import { isLoggedIn, userID } from './Context';
import { Link } from 'react-router-dom';

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
    text-decoration: none;
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

const StyledLink = styled(Link)`
  margin: 10px;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  text-decoration: none;
`;

const Logo = styled(Link)`
  margin: 10px;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
`;

function Header() : JSX.Element {
  const flag = useContext(isLoggedIn);
  const id = useContext(userID);
  return (
    <Div className="header">
        <div className="left-logo"><Logo to="/">Graph Visualizer</Logo></div>
        <div className="right-box"> 
          <ul className="menu">
            <li><StyledLink to="/Cloud">CLOUD</StyledLink></li>
            {flag && id !== null ? (<li><p>{id.toUpperCase()}</p></li>) : 
            (<><li><StyledLink to="LogIn">LOGIN</StyledLink></li><li><StyledLink to="SignUp">SIGNUP</StyledLink></li></>)}
          </ul> 
        </div>  
    </Div>
  );
}

export default React.memo(Header);