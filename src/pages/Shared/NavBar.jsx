import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext/AuthContext";

const NavBar = () => {
  const { user, signoutUser } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2 bg-base-100 w-40 z-1">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </>
  );

  const hndleSignOut = () => {
    signoutUser()
      .then(() => {
        console.log("signout Successfully");
      })
      .catch((error) => {
        console.log(error.messge);
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          ></div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl" href="/">
          daisyUI
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex gap-4">
        {user ? (
          <button className="cursor-pointer border p-2" onClick={hndleSignOut}>Log-Out</button>
        ) : (
          <>
            <Link className="btn" to="/register">
              Register
            </Link>
            <a className="btn" href="/signin">
              Sign-In
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
