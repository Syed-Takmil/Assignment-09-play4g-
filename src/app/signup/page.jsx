

import React from 'react';
import Button from '../../Components/shared/Button';

const RegisterPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center p-4"
      style={{
        backgroundImage:
          "url('/turf.jpg')",
      }}
    >
      <form
        className="backdrop-blur-md bg-white/80 grid text-xl my-5 shadow-xl transition-all duration-500 border-base-300 rounded-box w-full max-w-md border p-4 md:p-8 hover:border-green-500 border-2"
      >
        <fieldset className="space-y-3">
          <legend className="fieldset-legend text-2xl font-bold mb-4 text-center">
            Register
          </legend>

          <label className="label">Name</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Enter your name"
          />

          <label className="label">Email</label>
          <input
            type="email"
            className="input w-full"
            placeholder="Enter your email"
          />

          <label className="label">Photo URL</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Paste your image URL"
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input w-full"
            placeholder="Create a password"
          />

          <label className="label">Confirm Password</label>
          <input
            type="password"
            className="input w-full"
            placeholder="Confirm your password"
          />

          <div className="flex gap-4 mt-5 justify-center items-center">
            <Button type="submit">Register</Button>

            <button
              type="reset"
              className="btn bg-green-400 w-fit btn-soft"
            >
              Reset
            </button>
          </div>

          <p className="text-sm text-center mt-4">
            Already have an account?
            <span className="text-green-600 font-semibold cursor-pointer ml-1">
              Login
            </span>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default RegisterPage;

