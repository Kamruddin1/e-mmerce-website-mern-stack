import React from "react";

import "./App.css";
import Home from "./Page/Home";
import ProductList from "./features/product-list/PoductList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Page/LoginPage";
import SignUpPage from "./Page/SignUpPage";
import CartPage from "./Page/CartPage";
import Checkout from "./Page/Checkout";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<LoginPage></LoginPage>}/>
        <Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/cart" element={<CartPage></CartPage>}></Route>
        <Route path="checkout" element={<Checkout></Checkout>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
