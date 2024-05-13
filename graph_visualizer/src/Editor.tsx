import React from 'react';
// import { useState, useRef } from 'react';
import styled from 'styled-components';

// textarea must show row numbers
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
            background-color: #202e3e;
            color: white;
            font-size: 13px;
            font-weight: bold;
            margin: 0px;
            witdh: 50%;
        }
        .directed {
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
        }
        .undirected {
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
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
            color = white;
            text-align: center;
        }
        textarea {
            width: 90%;
            height: 500px;
            background-color: white;
            color: white;
            font-size: 15px;
            padding: 0px;
            border: none;
            outline: none;
            margin: 0px;
        }
    }
`;

function Editor() {
    // const [text, setText] = React.useState("Input adjacency list here.");
    // const lines = useRef();
    
    return (
        <Div>
            <div className="Mode">
                <button className="directed">DIRECTED</button>
                <button className="undirected">UNDIRECTED</button>
            </div>
            <div className="AdjInput">
                <div className="Line-Numbers">1</div>
                <textarea className="Input-Box" value="text"></textarea>
            </div>
        </Div>
    );
}

export default React.memo(Editor);