import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Payment from './pages/Payment';
import Cart from './pages/Cart';
import  { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <ToastContainer position="top-left" autoClose={2000} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
