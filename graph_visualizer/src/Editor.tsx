import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    flex-direction: row;
    width:100%;
    background-color: white;
    .Mode {
        height: 40px;
        width: 100%;
        display: flex;
        margin-bottom: 15px;
        justify-content: center;
        button {
            flex: 1;
            border: none;
            color: white;
            font-size: 13px;
            font-weight: bold;
            margin: 0px;
            width: 50%;
        }
    }
    .AdjInput {
        display: flex;
        width: 100%;
        border-style: solid;
        border-color: black;
        border-radius: 10px;
        border-width: 0.5px;
        overflow: hidden;
        background-color: #EAEAEA;
        color: black;
        justify-content: space-between;
        .Line-Numbers {
            width: 10%;
            height: 500px;
            color: black;
            text-align: center;
            font-size: 15px;
            white-space: pre-line;
            white-space: pre-wrap;
        }
        textarea {
            width: 90%;
            height: 500px;
            background-color: white;
            color: black;
            font-size: 15px;
            padding: 0px;
            border: none;
            outline: none;
            margin: 0px;
            white-space: pre-line;
            white-space: pre-wrap;
            resize: none;
        }
    }
`;

interface DirectedButtonProps {
    isSelected: boolean;
}

const DirectedButton = styled.button<DirectedButtonProps>`
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: ${props => props.isSelected ? '#4b4e6a' : '#202e3e'};
`;

interface UnDirectedButtonProps {
    isSelected: boolean;
}

const UnDirectedButton = styled.button<UnDirectedButtonProps>`
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: ${props => props.isSelected ? '#4b4e6a' : '#202e3e'};
`;

function Editor({ text, setText, lineNum, setLineNum, onChange, flag, setFlag } :
    {   
        text: string, setText: React.Dispatch<React.SetStateAction<string>>, lineNum: string, 
        setLineNum: React.Dispatch<React.SetStateAction<string>>, onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
        flag: boolean, setFlag: React.Dispatch<React.SetStateAction<boolean>>
    }
) : JSX.Element {
    return (
        <Div>
            <div className="Mode">
                <DirectedButton isSelected={!flag} onClick={(e)=>{setFlag(false);}}>DIRECTED</DirectedButton>
                <UnDirectedButton isSelected={flag} onClick={(e)=>{setFlag(true);}}>UNDIRECTED</UnDirectedButton>
            </div>
            <div className="AdjInput">
                <div className="Line-Numbers">{lineNum}</div>
                <textarea onChange={onChange} value={text}></textarea>
            </div>
        </Div>
    );
}

export default React.memo(Editor);