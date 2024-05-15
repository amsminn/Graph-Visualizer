import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Cloud from './Cloud';
import reportWebVitals from './reportWebVitals';
import { LogInContext } from './Context';
import { GraphDataContext } from './Context';

import {
  createBrowserRouter, 
  RouterProvider,
} from 'react-router-dom';

const Router = createBrowserRouter([
  {
    path: '/',
    element: (<App />)
  },
  {
    path: '/SignUp',
    element: (<SignUp />)
  },
  {
    path: '/LogIn',
    element: (<LogIn />)
  },
  {
    path: '/Cloud',
    element: (<Cloud />)
  },
  {
    path: '/Cloud/:id',
    element: (<Cloud />)
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function Main(): JSX.Element {
  const [data, setData] = React.useState<string | null>(null);
  const [id, setID] = React.useState<string | null>(localStorage.getItem('userID'));
  const setIdWithLocalStorage = (id: string | null) => {
    if(id !== '' && id !== null) {
      localStorage.setItem('userID', id);
      setID(id);
    } else {
      localStorage.clear();
      setID(null);
    }
    console.log(id);
    console.trace();
  };
  return (
    <LogInContext.Provider value={{ userID: id, setUserID: setIdWithLocalStorage }}>
      <GraphDataContext.Provider value={{ data: data, setData: setData }}> 
        <RouterProvider router={Router} />
      </GraphDataContext.Provider>
    </LogInContext.Provider>
  );
}

root.render(
    <Main />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
