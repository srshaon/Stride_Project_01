import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Pets</a>
                <ul className="p-2">
                  <li>
                    <a>Birds</a>
                  </li>
                  <li>
                    <a>Cats</a>
                  </li>
                  <li>
                    <a>Dogs</a>
                  </li>
                  <li>
                    <a>Fish</a>
                  </li>
                  <li>
                    <a>Others</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Medicine</a>
              </li>
              <li>
                <a>Accessories</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">PetBuddy</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <details>
                <summary>Pets</summary>
                <ul className="p-2">
                  <li>
                    <a>Birds</a>
                  </li>
                  <li>
                    <a>Cats</a>
                  </li>
                  <li>
                    <a>Dogs</a>
                  </li>
                  <li>
                    <a>Fish</a>
                  </li>
                  <li>
                    <a>Others</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Medicine</a>
            </li>
            <li>
              <a>Accessories</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
