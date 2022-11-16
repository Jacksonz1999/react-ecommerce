import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
/* import {BrowserRouter as Router } from "react-router-dom"; */
function App() {

  return (
    <>
   {/*  <Router> */}
      <Home />
      <Login/>
      <Product/>
      <ProductList/>
      <Register/>
      <Cart/>
    {/* </Router> */}
    </>
   
  );
}

export default App;
