import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

const Social = ({ signInWithGithub, signInWithGoogle }) => {
  return (
    <div>
      <div className="divider">OR Sign Up with</div>
      <div className="flex justify-evenly items-center p-5 pt-0">
        <div className="text-3xl" onClick={() => signInWithGoogle()}>
          <FcGoogle />
        </div>
        <div className="text-3xl" onClick={() => signInWithGithub()}>
          <AiFillGithub />
        </div>
      </div>
    </div>
  );
};

export default Social;
