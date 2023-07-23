import { Link } from "react-router-dom";
import Search from "../../Search";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
  const menuItem = (
    <>
      <li className="hover:text-white">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="hover:text-white">
        <Link to={"/colleges"}>Colleges</Link>
      </li>
      <li className="hover:text-white">
        <Link to={"/admission"}>Admission</Link>
      </li>
      <li className="hover:text-white">
        <Link to={"/mycollege"}>MyCollege</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-blue-500 px-7 text-white">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Admission</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItem}</ul>
        </div>
        <div className="navbar-end">
          <div className="mr-3">
            {user ? <Link>{user.displayName}</Link> : ""}
          </div>
          {user ? (
            <button onClick={handleLogout} className="">
              Logout
            </button>
          ) : (
            <Link className="" to={"/user/login"}>
              Login
            </Link>
          )}
        </div>
      </div>
      <Search></Search>
    </div>
  );
};

export default Navbar;
