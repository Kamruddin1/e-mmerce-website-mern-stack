import React from 'react';

import './App.css';
import Home from './Page/Home';
import ProductList from './features/product-list/PoductList';
import Login from './features/auth/Login';
import SignUp from './features/auth/SignUp';

function App() {
  return (
    <div className="App">
     <Home></Home>
     {/* <ProductList></ProductList> */}
     <Login></Login>
     <SignUp></SignUp>
    </div>
  );
}

export default App;
