import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex h-screen justify-center items-center">
      <div>
        <h1 className="text-4xl">404 Page Not Found</h1>
        <br />
        {error && (
          <div>
            <p className="text-red-500"> {error.statusText || error.message}</p>
            <p>{error.status}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
