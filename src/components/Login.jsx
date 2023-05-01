import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "./AuthProvider";

const Login = () => {
  const { signIn, signInGoogle, githubSignIn } = useContext(AuthContext);
  console.log(signIn);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const singUser = result.user;
        console.log(singUser);
        form.reset("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const googleBtnClick = () => {
    signInGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithub = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="mx-auto w-4/12 bg-orange-100 rounded">
      <h4 className="text-center pt-6 text-2xl">Login here</h4>
      <form
        onSubmit={handleLogin}
        className="card-body "
      >
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
            Login
          </button>
        </div>

        <p className="text-center">
          <Link
            to="/register"
            className="bg-black text-white ml-2 rounded-md px-2"
          >
            sign-up now?
          </Link>
        </p>

        <div className="flex justify-center gap-2">
          <button onClick={googleBtnClick} className="btn btn-secondary w-32">
            <p>
              <FaGoogle></FaGoogle>
            </p>{" "}
            Google
          </button>
          <button
            onClick={handleGithub}
            className="btn btn-secondary w-32 gap-4"
          >
            <p>
              <FaGithub></FaGithub>
            </p>
            Github
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
