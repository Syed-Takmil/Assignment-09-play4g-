
import React from 'react';

const loadings = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-base-200">

      <span className="loading loading-spinner loading-lg text-primary"></span>

      <p className="mt-4 text-lg font-semibold">
        Loading, please wait...
      </p>

    </div>
    );
};

export default loadings;
