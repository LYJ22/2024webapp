import React from "react";

function NavbarComp() {
  return (
    <div className="bg-sb-600 py-3">
      <nav className="container mx-auto flex justify-between px-4 md:px-0">
        <h1>
          <a
            href="#"
            className="h-full text-3xl flex justify-center items-center"
          >
            NIKE
          </a>
        </h1>

        <div className="hidden md:block">
          <ul className="flex">
            <li>
              <a
                href="#!"
                className="px-4 py-2 block text-gray-100 hover:text-red-600 hover:bg-gray-100"
              >
                New
              </a>
            </li>
            <li>
              <a href="#!" className="px-4 py-2 block">
                Men
              </a>
            </li>
            <li>
              <a href="#!" className="px-4 py-2 block">
                Women
              </a>
            </li>
            <li>
              <a href="#!" className="px-4 py-2 block">
                Kids
              </a>
            </li>
            <li>
              <a href="#!" className="px-4 py-2 block">
                Sale
              </a>
            </li>
          </ul>
        </div>
        <div className="block md:hidden">text</div>
      </nav>
    </div>
  );
}

export default NavbarComp;
