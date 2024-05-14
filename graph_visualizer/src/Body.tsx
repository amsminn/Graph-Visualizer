import React, { useState } from 'react';
import styled from 'styled-components';
import Editor from './Editor';
import Painter from './Painter';

const Div = styled.div`
    margin-top: 30px;
    justify-content: center;
    margin-right: 10%;
    margin-left: 10%;
    align-items: center;
    display: flex;
    span {
        width: 30%;
        height: 700px;
        margin: 20px;
    }
    .Painter {
      width: 40%;
    }
    white-space: pre-line;
    white-space: pre-wrap;
`;

function Body() : JSX.Element {
  const [text, setText] = useState<string>("");
  const [lineNum, setLineNum] = useState<string>("");
  const onChange = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    let str = '';
    let len = e.target.value.split('\n').length;
    for(let i = 1; i <= len; i++) { str += i + '\n'; }
    setLineNum(str);
  }
  return (
    <Div>
        <span>
          <Editor text={text} setText={setText} lineNum={lineNum} setLineNum={setLineNum} onChange={onChange}/>
        </span>
        <span className="Painter">
          <Painter data={text}/>
        </span>
    </Div>
  );
}

export default React.memo(Body);