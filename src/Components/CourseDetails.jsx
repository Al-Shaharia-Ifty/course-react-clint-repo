import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 m-10">
        <div className="">
          <header className="text-xl text-red-500">{data.heading}</header>
          <h2 className="text-2xl mt-3">{data.name}</h2>
          <p className="text-lg mt-5">{data.description}</p>
          <Link to={`../../checkout/${data.id}`}>
            <button className="btn btn-primary btn-outline mt-5">
              Get Premium Access
            </button>
          </Link>
        </div>
        <div>
          <img className="rounded-lg" src={data.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
