import React from 'react';
import styled from 'styled-components';
import Screen from './Screen';
import { useRef } from 'react';

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
            background-color: #4b4e6a;
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
`;

const SaveImageButton = styled.button`
    background-color: #4b4e6a;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    color: white;
    margin-left: 20px;
`;

function Painter({ data, flag } : { data : string, flag : boolean }) : JSX.Element {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const onClick = () => {
        if(canvasRef && canvasRef.current) {
            const canvas = canvasRef.current;
            const image = canvas.toDataURL();
            const a = document.createElement("a");
            a.href = image;
            a.download = "canvas.jpg";
            a.click();
        }
    };
    return (
        <Div>
            <div className="load-export">
                <button className="save">SAVE</button>
                <button className="import">IMPORT</button>
                <SaveImageButton onClick={onClick}>SAVE as JPG</SaveImageButton>
            </div>
            <Screen data={data} flag={flag} canvasRef={canvasRef} />
        </Div>
    );
}

export default React.memo(Painter);