import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import HomeComp from "./components/home/HomeComp";
import AboutComp from "./components/AboutComp";
import AboutComp from "./components/ProductComp";

function App() {
  return (
    <div>
      <nav>
        {/* <a href="/">홈</a> */}
        {/* <Link to="/">홈</Link> */}
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        |
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        |<Link to="/product">product</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/about" element={<AboutComp />} />
        <Route path="/product" element={<ProductComp />} />
      </Routes>

      <footer>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</footer>
    </div>
  );
}

export default App;
