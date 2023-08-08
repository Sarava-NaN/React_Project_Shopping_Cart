import React from "react";
import Home from "./Components/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Cart from "./Components/Cart";
import { CartProvider } from "react-use-cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shipping from "./Components/Shipping";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route expect path="/Shipping" element={<Shipping />} />
        </Routes>
      </BrowserRouter>

      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
    </>
  );
};

export default App;
