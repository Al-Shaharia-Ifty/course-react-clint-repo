import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../Firebase.init";
import Loading from "../Shared/Loading";

const ResetPassword = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  let ErrorMessage;

  if (sending) {
    return <Loading />;
  }
  if (error) {
    ErrorMessage = <p className="text-red-500">{error?.message}</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    sendPasswordResetEmail(email);
    navigate("../login");
  };
  return (
    <div>
      <div className="hero-content max-w-full p-0">
        <div className="hero min-h-screen bg-base-200">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h2 className="text-3xl text-center mt-5 font-bold">
              Reset Password
            </h2>
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              {ErrorMessage}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
