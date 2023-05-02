import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";


import { AuthContext } from "./AuthProvider";

const Register = () => {
  const { user, createUser } = useContext(AuthContext);
  const [error, setError] = useState([]);
  console.log(user, createUser);

  const handleRegister = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    console.log(name, email, password);

    if (password.length < 6) {
      setError("your must be 6 char");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        from.reset("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="mx-auto w-full md:w-5/12 h-fit bg-purple-200 rounded">
    <h5 className="text-center pt-6 text-2xl">Please Register Now</h5>
    <form
      onSubmit={handleRegister}
      className="card-body "
    >
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="your name"
          className="input input-bordered"
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="email"
          className="input input-bordered"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          className="input input-bordered"
        />
      </div>
      <div className="form-control mt-6">
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </div>
      <p className="text-center">
        already account
        <Link to="/login" className="bg-black text-white ml-2 rounded-md px-2">
          login?
        </Link>
      </p>
      <p>{error}</p>
    </form>
    </div>
  );
};

export default Register;
