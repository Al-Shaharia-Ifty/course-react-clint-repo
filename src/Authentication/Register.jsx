import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../Firebase.init";

const Register = () => {
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, UError] = useUpdateProfile(auth);
  let ErrorMessage;

  if (error || UError) {
    ErrorMessage = (
      <p className="text-red-500 mb-2">{error?.message || UError?.message}</p>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    //
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // sign up with email and password
    await createUserWithEmailAndPassword(email, password);
    // update name and photo
    await updateProfile({ displayName, photoURL });
  };
  if (user) {
    // navigate("../course");
  }
  return (
    <div>
      <div className="hero-content max-w-full p-0">
        <div className="hero min-h-screen bg-base-200">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h2 className="text-3xl text-center mt-5 font-bold">Register</h2>
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  name="photo"
                  type="PhotoURL"
                  placeholder="PhotoURL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
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
                  required
                />
                {ErrorMessage}
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
                    to="../login"
                    className="label-text-alt link link-hover"
                  >
                    Already have any account
                    <span className="text-blue-500"> Login</span>
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
