import React from "react";
import { Route, Routes } from "react-router-dom";
import Checkout from "../pages/checkout";
import Clothes from "../pages/clothes";
import Home from "../pages/home";

const RouterList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clothes" element={<Clothes />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default RouterList;
