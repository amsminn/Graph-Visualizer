import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Cloud from './Cloud';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter, 
  RouterProvider,
  Route,
  Link
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
root.render(
    <RouterProvider router={Router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
