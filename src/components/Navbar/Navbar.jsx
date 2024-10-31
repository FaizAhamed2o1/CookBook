import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-7xl md:mx-auto md:mb-14 md:mt-7 mb-7 mx-4 mt-5">
      <div className="navbar bg-base-100 p-0">
        <div className="navbar-start">
          <div className="dropdown">
            {/* Dropdown button for mobile screen nav links */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
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

            {/* Links for mobile screen */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/recipes">Recipes</NavLink>
              </li>
              <li>
                <NavLink to="/contactUs">Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost md:text-4xl md:p-0 text-xl">
            CookBook
          </NavLink>
        </div>
        <div className="navbar-center lg:flex hidden">
          <ul className="menu menu-horizontal gap-3 px-1 text-lg">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/recipes">Recipes</NavLink>
            </li>
            <li>
              <NavLink to="/contactUs">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-slate-800 hover:text-slate-900 text-gray-100">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
