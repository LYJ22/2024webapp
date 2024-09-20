import React from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
      <nav className="bg-blue-200 px-4">
        <div className="container mx-auto flex justify-between py-4">
          <h1>logo</h1>
          <ul className="flex  gap-3">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mx-auto px-4 py-4">{children}</div>
      <footer className="bg-gray-400">
        <div className="container mx-auto px-4 py-4">푸터영역</div>
      </footer>
    </>
  );
}

export default Layout;
