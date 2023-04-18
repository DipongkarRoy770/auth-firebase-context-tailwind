import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Login = () => {
  
  const {signIn ,signInGoogle}=useContext(AuthContext)
  console.log(signIn)
  const handleLogin =event=>{
    event.preventDefault()
    const form =event.target 
    const email = form.email.value ;
    const password = form.password.value ;
    console.log(email,password)


    signIn(email,password)
    .then(result=> {
      const singUser = result.user 
      console.log(singUser)
      form.reset('')
    }
    )
    .catch(error=>{
      console.log(error)
    })
  }
  const googleBtnClick=()=>{
    signInGoogle()
     .then(result=>{
      const user = result.user 
      console.log(user)
     })
     .catch(error=>{
      console.log(error)
     })
  }
 
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col md:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-semibold">Please Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Login</button>
        </div>
        <Link to="/register" className="label-text-alt link link-hover">sign-up now?</Link>
        <button onClick={googleBtnClick} className='btn btn-primary'>Google</button>
      </form>
    </div>
  </div>
</div>
  );
};

export default Login;