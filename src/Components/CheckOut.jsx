import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const p = useLoaderData();
  return (
    <div className="min-h-screen text-center">
      <h2 className="text-green-500 text-4xl mt-4">Congratulation</h2>
      <p className="text-2xl mt-5">
        You perches <span className="text-primary">{p.name}</span> Course
      </p>
    </div>
  );
};

export default CheckOut;
