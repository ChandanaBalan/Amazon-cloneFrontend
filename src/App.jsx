import React, { useState } from "react"
import './App.css'
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Product from "./pages/Product"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"


function App() {
  const [cartItems, setCartItems] = useState([]); // Cart state

  // Add a product to the cart
  const addToCart = (product) => {
    setCartItems((prevCart) => [...prevCart, product]);
  };

  // Remove a product from the cart
  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    
    <>
      <Header cartItems={cartItems} />
        <Routes>
          
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
          />
          <Route path="/product" element={<Product addToCart={addToCart} />} />
          
        </Routes>
        <Footer/>
    </>
      
  );
}

export default App;
