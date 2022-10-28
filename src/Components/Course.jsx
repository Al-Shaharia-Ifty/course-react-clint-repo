import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Course = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="grid md:grid-cols-5 grid-cols-1 ">
        <div className="col-span-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-10 my-10">
          {data.map((p) => (
            <Link
              to={`../course-details/${p.id}`}
              className="bg-base-200 rounded-lg"
              key={p.id}
            >
              <img className="rounded-t-lg w-full" src={p.img} alt="" />
              <h2 className="text-2xl mt-3 mx-5">{p.name}</h2>
              <p className="text-xl mx-5 mb-5">
                Price: <span className="text-info">{p.price}</span>৳
              </p>
            </Link>
          ))}
        </div>
        <div className="bg-base-200 mr-0 hidden md:grid grid-cols-1 py-10 ">
          {data.map((p) => (
            <Link
              className="mx-auto text-xl"
              to={`../course-details/${p.id}`}
              key={p.id}
            >
              {p.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
