import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import { GraphDataContext, LogInContext } from './Context';
import { useNavigate } from 'react-router-dom';

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

const Cell = styled.td`
    text-decoration: underline;
    color: blue;
`;

interface CloudData {
    title: string;
    userID: string;
    date: string;
    data: string;
}

function Cloud(): JSX.Element {
    const navigate = useNavigate();
    const {userID: id, setUserID: setId} = useContext(LogInContext);
    const [dataArr, setDataArr] = useState<Array<CloudData>>([]);
    useEffect(() => {
        const f = async () => {
            const dataArr = await fetch("http://localhost:3001/api/Cloud", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((res) => res.json());
            setDataArr(dataArr);
        };
        f();
    }, []);
    const setData = useContext(GraphDataContext).setData;
    const onClick = (data : string) => {
        setData(data);
        navigate("/");
    };
    return (
        <>
            <LogInContext.Provider value={{ userID: id, setUserID: setId }}>
                <Header></Header>
            </LogInContext.Provider>
            <StyledDiv>
                <h1>Cloud</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {  
                            dataArr.map(({ 
                                title, 
                                userID, 
                                date,
                                data
                            }) => (
                                <tr key={userID}>
                                    <Cell onClick={() => {
                                        onClick(data);
                                    }}>{title}</Cell>
                                    <td>{userID}</td>
                                    <td>{date}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </StyledDiv>
        </>
    );
}

export default Cloud;