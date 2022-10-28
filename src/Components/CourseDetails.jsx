import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ReactToPdf from "react-to-pdf";

const CourseDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <ReactToPdf>
        {({ toPdf, targetRef }) => (
          <div ref={targetRef}>
            <div className="hero-content flex-col lg:flex-row-reverse m-10">
              <div className="">
                <img className="rounded-lg" src={data.img} alt="" />
              </div>
              <div className="">
                <div className="flex justify-between">
                  <header className="text-xl text-red-500">
                    {data.heading}
                  </header>
                  <button className="btn btn-outline" onClick={toPdf}>
                    Genator Pdf
                  </button>
                </div>
                <h2 className="text-2xl mt-3">{data.name}</h2>
                <p className="text-lg mt-5">{data.description}</p>
                <p className="text-md mt-5">
                  Price:{" "}
                  <span className="text-info text-2xl">{data.price}</span>৳
                </p>
                <Link to={`../../checkout/${data.id}`}>
                  <button className="btn btn-primary btn-outline mt-5">
                    Get Premium Access
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </ReactToPdf>
    </div>
  );
};

export default CourseDetails;
