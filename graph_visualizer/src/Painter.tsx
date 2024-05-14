import React from 'react';
import styled from 'styled-components';
import Screen from './Screen';

const Div = styled.div`
    display: flex;
    width: 100%;
    display: block;
    .load-export {
        height: 40px;
        width: 80%;
        display: flex;
        margin-bottom: 15px;
        justify-content: center;
        margin: auto;
        button {
            justify-content: center;
            flex: 1;
            border: none;
            background-color: #202e3e;
            color: white;
            font-size: 13px;
            font-weight: bold;
            width: 30%;
        }
        .save {
            background-color: #353535;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
            margin-right: 0;
        }
        .import {
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
            margin-left: 0;
        }
    }
    .Screen {
        margin-top: 15px;
        border-style: solid;
        border-color: black;
        border-radius: 10px;
        border-width: 0.5px;
        height: 500px;
        overflow: hidden;
    }
`;

function Painter({ data } : { data : string }) : JSX.Element {
    return (
        <Div>
            <div className="load-export">
                <button className="save">SAVE</button>
                <button className="import">IMPORT</button>
            </div>
            <div className="Screen">
                <Screen data={data}/>
            </div>
        </Div>
    );
}

export default React.memo(Painter);