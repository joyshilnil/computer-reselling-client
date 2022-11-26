import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../Context/AuthProvider";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <div className="navbar p-0 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/blog" className="font-semibold">
                  BLOG
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="flex">
            <img src={logo} alt="Logo" className="w-8" />
            <p className="font-black text-cyan-400">Computer</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/" className="font-semibold">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/blog" className="font-semibold">
                BLOG
              </Link>
            </li>
            {user?.email && 
              <>
                <li>
                  <Link to="/addservice" className="font-semibold">
                    ADD SERVICE
                  </Link>
                </li>
                <li>
                  <Link to="/addservice" className="font-semibold">
                    ADD SERVICE
                  </Link>
                </li>
              </>
            }
          </ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <>
              <button
                onClick={logout}
                className="btn btn-outline btn-sm btn-info"
              >
                Log Out
              </button>
            </>
          ) : (
            <Link to="/signup" className="btn btn-outline btn-sm btn-info">
              Sign Up
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
