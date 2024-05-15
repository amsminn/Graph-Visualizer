import React from 'react';
import Header from './Header';
import styled from 'styled-components';
import { Navigate, useNavigate } from 'react-router-dom';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f8f9fa;

    h1 {
        margin-bottom: 2rem;
        color: #343a40;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 300px;
        gap: 1rem;

        input {
            padding: 0.5rem;
            border-radius: 4px;
            border: 1px solid #ced4da;

            &:focus {
                border-color: #495057;
            }
        }

        button {
            padding: 0.5rem;
            border-radius: 4px;
            border: none;
            background-color: #495057;
            color: white;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;

            &:hover {
                background-color: #343a40;
            }
        }
    }
`;

function LogIn() : JSX.Element {
    const id = React.useRef<HTMLInputElement>(null);
    const password = React.useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const onClick = async (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const res = await fetch("http://localhost:3001/api/LogIn", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id.current?.value,
                password: password.current?.value
            })
        });
        const data = await res.json();
        alert(data.message);
        if(data.success) {
            navigate("/");
        }
    };
    const signup = () => {
        navigate ("/SignUp");
    };
    return (
        <>
            <Header />
            <StyledDiv>
                <h1>LOGIN</h1>
                <form>
                    <input type="text" placeholder="ID" ref={id}/>
                    <input type="password" placeholder="Password" ref={password}/>
                    <button onClick={onClick}>LogIn</button>
                    <button onClick={signup}>SignUp</button>
                </form>
            </StyledDiv>
        </>
    );
}

export default React.memo(LogIn);