

import React from 'react';

import Link from "next/link";
const notfound = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 text-center px-4">

      <h1 className="text-7xl font-bold text-primary">404</h1>

      <h2 className="text-2xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 btn btn-primary px-6"
      >
        ⬅ Back to Home
      </Link>

    </div>
    );
};

export default notfound;

