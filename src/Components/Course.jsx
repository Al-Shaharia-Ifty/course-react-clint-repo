import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Course = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="grid md:grid-cols-5 grid-cols-1 my-10 ">
        <div className="col-span-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-10">
          {data.map((p) => (
            <Link
              to={`../course-details/${p.id}`}
              className="p-5 bg-base-200 rounded-lg"
              key={p.id}
            >
              <img className="rounded-lg w-full" src={p.img} alt="" />
              <h2 className="text-2xl mt-3">{p.name}</h2>
              <p className="text-xl">Price: {p.price}৳</p>
            </Link>
          ))}
        </div>
        <div className="bg-base-200 mr-0 grid grid-cols-1 py-10">
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
