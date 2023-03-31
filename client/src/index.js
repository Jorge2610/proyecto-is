import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider,Route,Link,Outlet, createRoutesFromElements} from 'react-router-dom';

import ModalProducto from './components/FormProductModal';
import SideMenu from './components/Layout';
import Casa from './Home'; 
import ModalConf from './Modals/ModalConfirmacion'


const Inicio = () =>{
  //Asociar el menu para la navegacion
  return(
  <>
      <SideMenu />
      <Outlet />
  </>);
}

//Construimos las rutas
const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Inicio />}>
          <Route path='/' element= {<Casa/>} />
          <Route path='/Inventario' element= {<ModalProducto/>} />
    </Route>

));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} className="menu">
     </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
