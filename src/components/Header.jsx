import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSingOut=()=>{
    logOut()
    .then(()=>{

    })
    .catch(error=>{
      console.log(error)
    })
  }
  return (
    <nav>
      <div className="navbar bg-neutral text-neutral-content">
        <a className="btn btn-ghost normal-case text-xl">Auth master</a>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/login">
          Login
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/register">
          Register
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/orders">
          Orders
        </Link>
        {user &&
          <Link className="btn btn-ghost normal-case text-xl" to="/profile">
            profile
          </Link>
        }
        {user ? (
          <>
            <span>{user.email}</span>

            <button onClick={handleSingOut}>SignOut</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
