import React from "react";
import { Link } from "react-router-dom";

const Error: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <h1 className="text-6xl font-bold text-[#F76B6A] mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-500 max-w-md mb-6">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <Link
        to="/"
        className="text-sm md:text-base font-medium uppercase text-white bg-[#F76B6A] hover:bg-[#d8111b] transition-all px-6 py-3 rounded-full shadow-md"
      >
        Go Back to Homepage
      </Link>
    </div>
  );
};

export default Error;
