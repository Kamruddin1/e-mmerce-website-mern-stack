import React from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductList from '../features/product-list/PoductList'
import Cart from '../features/cart/Cart'

const Home = ({children}) => {
  return (
    <>
    <Navbar>
       <ProductList></ProductList>
       
    </Navbar>
   
    </>
  )
}

export default Home