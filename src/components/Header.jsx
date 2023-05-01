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
      <div className="">
        <Link className=" text-xl" to="/">
          Home
        </Link>
        {
          user ?
        <Link className=" text-xl" to="/register">
          Register </Link>:
          <Link className="text-xl" to="/login">
          Login
        </Link>
        }
       
        <Link className=" text-xl" to="/orders">
          Orders
        </Link>
        {user &&
          <Link className=" text-xl" to="/profile">
            profile
          </Link>
        }
        {user ? (
          <>
            <span>{user.email}</span>

            <Link onClick={handleSingOut}>SignOut</Link>
          </>
        ) : (
          
          <Link to="/register">Register</Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
