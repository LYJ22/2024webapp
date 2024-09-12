import React from "react";
import { Link } from "react-router-dom";

function NavComp() {
  return (
    <nav>
      <h1>logo</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/product">product</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavComp;
