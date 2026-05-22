




"use client";

import React from 'react';
import Button from '../../Components/shared/Button';
import Link from 'next/link';
import { authClient } from '../../lib/auth-client';
import { toast } from 'react-toastify';
import { redirect, useRouter } from 'next/navigation';



const RegisterPage = () => {
  const signIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};
  const router=useRouter()
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
    callbackURL:"/",
});

if(error){
  toast.error("Error: " + error.message);
}
else{ 
   toast.success("Registration successful! .");
   redirect('/login')
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
        className="backdrop-blur-md bg-white/80 grid text-xl my-4 shadow-xl transition-all duration-500 border-base-300 rounded-box w-full max-w-md  p-4 md:p-8 hover:border-green-500 border-2"
      >
        <fieldset className="space-y-2">
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

          <div className="flex w-full gap-4 mt-5 justify-center items-center">
            <Button type="submit">Create Account</Button>
          </div>

          <button
          onClick={signIn}
      type="button"
      className="btn rounded-3xl w-full bg-white text-black border-[#000000]"
    >
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  SignUp with Google
</button>

  <p className="text-md text-center mt-4">
            Already have an account?
           <Link href="/login" className="text-green-700 font-semibold"> Log In</Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default RegisterPage;

