import React from "react";

function Navpractice() {
  return (
    <nav className="mt-3 py-4 bg-gray-400">
      <div className="container mx-auto flex justify-between items-center">
        <h1>
          <a href="#!" className="text-2xl">
            LOGO
          </a>
        </h1>

        <div className="hidden md:block">
          <ul className="flex">
            <li>
              <a className="block px-4 py-2">Shoes</a>
            </li>
            <li>
              <a className="block px-4 py-2">Gloves</a>
            </li>
            <li>
              <a className="block px-4 py-2">Jacket</a>
            </li>
            <li>
              <a className="block px-4 py-2">Pants</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navpractice;
