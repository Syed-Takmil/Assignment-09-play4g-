




"use client";

import React from 'react';
import Button from '../../Components/shared/Button';
import Link from 'next/link';
import { authClient } from '../../lib/auth-client';
import { toast } from 'react-toastify';


const RegisterPage = () => {
  const HandleSubmit = async(e) => {
    e.preventDefault();
  
    const form = e.currentTarget;
  
    const formData = new FormData(form);

    const userData = Object.fromEntries(formData.entries());
    console.log(userData);
const { data, error } = await authClient.signUp.email({
    name: userData.name, // required
    email: userData.email, // required
    password: userData.password, // required
    image: userData.image,
    callbackURL: "http://localhost:3000/login",
});
console.log(data);
console.log(error);
if(error){
  toast.error("Error: " + error.message);
}
else{  toast.success("Registration successful! Please check your email to verify your account.");
}
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center p-4"
      style={{
        backgroundImage:
          "url('/turf.jpg')",
      }}
    >
      <form
        onSubmit={HandleSubmit}
        className="backdrop-blur-md bg-white/80 grid text-xl my-5 shadow-xl transition-all duration-500 border-base-300 rounded-box w-full max-w-md border p-4 md:p-8 hover:border-green-500 border-2"
      >
        <fieldset className="space-y-3">
          <legend className="fieldset-legend text-2xl font-bold mb-4 text-center">
            Register
          </legend>

          <label className="label">Name</label>
          <input
          name='name'
            type="text"
            className="input w-full"
            placeholder="Enter your name"
            required
          />

          <label className="label">Email</label>
          <input
          name='email'
            type="email"
            className="input w-full"
            placeholder="Enter your email"
          />

          <label className="label">Photo URL</label>
          <input
            type="text"
            name='image'
            className="input w-full"
            placeholder="Paste your image URL"
            required
          />

          <label className="label">Password</label>
          <input
          name='password'
            type="password"
            className="input w-full"
            placeholder="Create a password"
            required
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
           <Link href="/login" className="text-green-700 font-semibold"> Log In</Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default RegisterPage;

