import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import LayoutComp from "./layout/LayoutComp";
import HomeComp from "./components/home/HomeComp";
import AboutComp from "./components/AboutComp";
import AboutComp from "./components/ProductComp";

function App() {
  return (
    <>
      <Routes>
        <Router path="/" elements={<LayoutComp />}>
          <Route index element={<HomeComp />} />
          <Route path="/about" element={<AboutComp />} />
          <Route path="/product" element={<ProductComp />}></Route>
        </Router>
      </Routes>
    </>
  );
}

export default App;
