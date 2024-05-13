import React from 'react';
import styled from 'styled-components';
import Editor from './Editor';

// i want to divite the editor into three parts in width, based in center
// and the height should be 700px

const Div = styled.div`
    margin-top: 50px;
    justify-content: space-between;
    margin-left: 10%;
    align-items: center;
    display: flex;
    p {
        width: 20%;
        height: 700px;
    }
`;

function Body() {
  return (
    <Div>
        <p><Editor /></p>
        <p>qwer</p>
        <p>asdf</p>
    </Div>
  );
}

export default React.memo(Body);