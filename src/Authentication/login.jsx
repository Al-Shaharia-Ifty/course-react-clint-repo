import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../Firebase.init";
import Social from "./Social";

const Login = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  if (user) {
    navigate("../course");
  }
  const handleSubmit = (e) => {
    // to stop page reload
    e.preventDefault();
    //
    const email = e.target.email.value;
    const password = e.target.password.value;
    //
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <div className="hero-content max-w-full p-0">
        <div className="hero min-h-screen bg-base-200">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h2 className="text-3xl text-center mt-5 font-bold">Login</h2>
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="********"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link
                    to="forget-password"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </Link>
                </label>
                <label className="label">
                  <Link
                    to="../register"
                    className="label-text-alt link link-hover"
                  >
                    Don't have any account{" "}
                    <span className="text-blue-500">Register</span>
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="divider">OR</div>
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
