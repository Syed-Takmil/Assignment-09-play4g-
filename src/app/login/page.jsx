


"use client"

import React from 'react';
import Button from '../../Components/shared/Button';
import Link from 'next/link';
import { authClient } from '../../lib/auth-client';
import { toast } from 'react-toastify';

const LoginPage = () => {


const HandleSubmit = async (e) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);
  const Userdata = Object.fromEntries(formData.entries());

  // show loading toast and store id
  const toastId = toast.loading("Logging in...");

  const { data, error } = await authClient.signIn.email({
    email: Userdata.email,
    password: Userdata.password,
    rememberMe: true,
    callbackURL: "/",
  });

  // force minimum loading time (e.g. 1.5 seconds)
  setTimeout(() => {
    if (error) {
      toast.update(toastId, {
        render: error.message,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } else {
      toast.update(toastId, {
        render: "Login successful!",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
    }
  }, 1500);
};
    return (

        <form
        onSubmit={HandleSubmit}
  className="bg-amber-100 grid text-xl my-5 hover:shadow-lg shadow-md transition-shadow duration-500 hover:-translate-y-2 border-base-300 rounded-box w-md mx-auto  p-4 md:p-8 hover:border"
>
  <fieldset className="space-y-3">
    <legend className="fieldset-legend text-xl font-semibold mb-4">
      Login
    </legend>

    <label className="label" >Email</label>
    <input type="email" name='email' className="input w-full" placeholder="Email" required/>

    <label className="label" >Password</label>
    <input type="password" name='password' className="input w-full" placeholder="Password" required />

    <div className="flex gap-4 m-3 justify-center items-center">
      <Button type="submit">Login</Button>

      <button
        type="reset"
        className="btn bg-green-400 w-fit btn-soft"
      >
        Reset
      </button>
    </div>

    <button
      type="button"
      className="btn rounded-3xl bg-white w-full text-black border-[#000000]"
    >
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
  </fieldset>
 <div className='flex mt-3 gap-0 justify-center items-center justify-items-center'>
    <span> Already have an account?</span> 
 <Link href="/signup" className='btn btn-link'>Sign Up</Link>
 </div>
</form>
   
    );
};

export default LoginPage;