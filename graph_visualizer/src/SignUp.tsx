import React from 'react';
import styled from 'styled-components';

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

function SignUp() : JSX.Element {
    return (
        <StyledDiv>
            <h1>SIGN UP</h1>
            <form>
                <input type="text" placeholder="ID"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Confirm Password"/>
                <button>Sign Up</button>
            </form>
        </StyledDiv>
    );
}

export default React.memo(SignUp);