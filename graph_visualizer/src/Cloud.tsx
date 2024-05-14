import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const StyledDiv = styled.div`
    border-radius: 10px;
    border-width: 0.5px;
    height: 500px;
    overflow: auto;
    padding: 1rem;
    background-color: #f8f9fa;

    h1 {
        margin-bottom: 2rem;
        color: #343a40;
    }

    table {
        width: 100%;
        border-collapse: collapse;

        th, td {
            border: 1px solid #ced4da;
            padding: 0.5rem;
            text-align: left;
        }

        th {
            background-color: #e9ecef;
        }

        tr:nth-child(even) {
            background-color: #e9ecef;
        }
    }
`;

function Cloud(): JSX.Element {

    return (
        <>
            <Header></Header>
            <StyledDiv>
                <h1>Board</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Replace this with your actual data */}
                        <tr>
                            <td>Sample Title</td>
                            <td>Sample Author</td>
                            <td>2022-01-01</td>
                        </tr>
                    </tbody>
                </table>
            </StyledDiv>
        </>
    );
}

export default React.memo(Cloud);