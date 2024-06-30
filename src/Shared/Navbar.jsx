import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#E53935", color: "white" } : {}
          }
          activeClassName="bg-primary text-white"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/search"
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#E53935", color: "white" } : {}
          }
          activeClassName="bg-primary text-white"
        >
          Search
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/requests"
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#E53935", color: "white" } : {}
          }
          activeClassName="bg-primary text-white"
        >
          Blood Requests
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#E53935", color: "white" } : {}
          }
          activeClassName="bg-primary text-white"
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          style={({ isActive }) =>
            isActive ? { backgroundColor: "#E53935", color: "white" } : {}
          }
          activeClassName="bg-primary text-white"
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow">
      <div className="navbar container mx-auto ">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost btn-sm text-xl">
            BloodHero
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <a className="btn btn-sm btn-primary text-white">Login</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
