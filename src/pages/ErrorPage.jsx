import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-gray-900 text-white text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Oops! Something went wrong.
      </h1>
      <p className="text-base md:text-lg mb-6 max-w-md">
        The page you're looking for doesn't exist or an error occurred.
      </p>
      <Link to="/">
        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
