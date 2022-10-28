import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <img className="w-48" src={data.img} alt="" />
      <h2>Name: {data.name}</h2>
    </div>
  );
};

export default CourseDetails;
