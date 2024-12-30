import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import {  RouterProvider } from 'react-router-dom';
import { createRoutesFromElements, createHashRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

 
const router = createHashRouter(
  createRoutesFromElements(<Route path="*" element={<App />} />)
);
 
root.render(
  <RouterProvider router={router}>
    <React.StrictMode/>
  </RouterProvider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 
