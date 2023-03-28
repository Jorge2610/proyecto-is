import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MenuDesplegable from './Menu';
import Form from './Form';
import reportWebVitals from './reportWebVitals';
import {Button} from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MenuDesplegable/>
    <Button type='primary'>AgregarProducto</Button>
    <Form/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
