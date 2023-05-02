import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSingOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <nav className="bg-gradient-to-r from-cyan-100 to-blue-100 flex justify-between md:w-11/12 md:px-12 mx-auto py-3 mb-6">
      <div>
        <h2 className="font-bold text-3xl">Food Recipe</h2>
      </div>
      <div>
        <Link className=" text-2xl font-semibold mr-2" to="/">
          Home
        </Link>
        {user ? (
          <Link className=" text-2xl font-semibold mr-2" to="/register">
            Register{" "}
          </Link>
        ) : (
          <Link className="text-2xl font-semibold mr-2" to="/login">
            Login
          </Link>
        )}

        <Link className=" text-2xl font-semibold mr-2" to="/orders">
          Orders
        </Link>
        {/* {user &&
          <Link className=" text-2xl font-semibold" to="/profile">
            profile
          </Link>
        } */}
        {user ? (
          <>
            <Link
              className=" text-2xl font-semibold mr-2"
              onClick={handleSingOut}
            >
              LogOut
            </Link>
            <span>{user.email}</span>
          </>
        ) : (
          <Link className=" text-2xl font-semibold mr-2" to="/register">
            Register
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
