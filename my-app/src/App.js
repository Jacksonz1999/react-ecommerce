import React from 'react';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import {BrowserRouter} from "react-router-dom"; 
/* import Router from './Router/Router'; */

function App() { 

  return (
    <>
      <BrowserRouter>
      {/* <Router/> */}
      <Home/>
      </BrowserRouter>
    </>
   
  );
}

export default App;
