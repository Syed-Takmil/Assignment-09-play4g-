


"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaAlignJustify } from 'react-icons/fa';
import NavLink from './NavLink';
import { authClient } from '../../lib/auth-client';
import { FiLogOut } from 'react-icons/fi';
import { BiArrowToBottom } from 'react-icons/bi';
import { IoIosArrowDropdown } from 'react-icons/io';
import { MdKeyboardArrowDown, MdKeyboardDoubleArrowDown } from 'react-icons/md';
import SkeletonCard from './SkeletonCard';
import { RiArrowDownWideFill } from 'react-icons/ri';

const NavBar =() => {
  const { data: session ,isPending} = authClient.useSession()
  const user=session?.user
 const links1=<>
 <NavLink href="/"><li>Home</li></NavLink>
  <NavLink href="/facilities"><li>All Facilities</li></NavLink></>
  const links =<>
<NavLink href="/"><li>Home</li></NavLink>
  <NavLink href="/facilities"><li>All Facilities</li></NavLink>
  <NavLink href="/bookings"><li>My Bookings</li></NavLink>
  <NavLink href="/add-facility"><li>Add Facility</li></NavLink>
  <NavLink href="/manage-facilities"><li>Manage My Facilities</li></NavLink>

</>
    return (
            <div className="navbar text-xl object-contain items-center justify-items-center justify-between  gap-1  shadow-md p-2">
    <div className="drawer md:hidden">
  <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <label htmlFor="my-drawer-1" className="btn drawer-button">
      <FaAlignJustify></FaAlignJustify>
    </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu text-lg gap-5 h-full bg-base-200  w-80 p-4">
      {user?links:links1}
    </ul>
  </div>
   
  </div>

      <Image 
      className=' w-auto mr-5 lg:mr-8 mx-auto md:mx-0 h-auto '
      alt='logo' width={160} height={60} src='/logo.png'/>

<ul className=" md:flex hidden justify-items-center justify-center gap-5 font-semibold items-center" >
    {user?links:links}
</ul>

{
  isPending ? (
      <SkeletonCard />
  ) : user ? (
    <div className='flex mr-5 justify-center font-semibold items-center gap-3'>

      <div className="dropdown dropdown-bottom dropdown-end">
        <div tabIndex={0} role="button" className="cursor-pointer   object-contain flex  items-center  w-full  bg-base-300  justify-center gap-1 mr-3 px-3 md:px-1 py-1 rounded-xl">
                  <span>
            <RiArrowDownWideFill />
          </span>
          <Image
            className='rounded-full'
            src={(user?.image)||"/user.jpg"}
            width={40}
            height={40}
            alt="user photo"
          />
          
            
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-5 gap-2 shadow-sm"
        >
          <Link href="/bookings">My Bookings</Link>

          <Link href="/add-facility">
            <li>Add Facility</li>
          </Link>

          <Link href="/manage-facilities">
            <li>Manage My Facilities</li>
          </Link>

          <Link
            href="/signup"
            onClick={async () => {
              await authClient.signOut();
            }}
            className='btn btn-lg bg-green-600 text-xl text-white font-medium'
          >
            LogOut
            <FiLogOut />
          </Link>
        </ul>
      </div>

      <p>
        Hello,
        <br />
        {user.name}
      </p>
    </div>
  ) : (
    <div className='flex mr-4 justify-center font-semibold items-center gap-3'>
      <Link
        href="/login"
        className='btn btn-lg bg-green-500 text-white font-medium'>
        LogIn
      </Link>

      <Link
        href="/signup"
        className='btn btn-lg bg-primary text-white font-medium'
      >
        SignUp
      </Link>
    </div>
  )
}



</div>
            
    );
};

export default NavBar;