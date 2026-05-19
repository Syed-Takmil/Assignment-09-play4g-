


"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaAlignJustify } from 'react-icons/fa';
import NavLink from './NavLink';
import { authClient } from '../../lib/auth-client';

const NavBar =() => {
  const { data: session } = authClient.useSession()
  const user=session?.user
 console.log(user)
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
      {links}
    </ul>
  </div>
   
  </div>

      <Image 
      className=' w-auto mr-3 lg:mr-8 mx-auto md:mx-0 h-auto '
      alt='logo' width={160} height={60} src='/logo.png'/>

<ul className=" md:flex hidden justify-center gap-5 font-semibold items-center" >
    {links}
</ul>

{user?
  <div className='flex flex-col md:flex-row mr-6 justify-center font-semibold items-center gap-3'>
     <Image src={user.image} width={40} height={40} alt="user's photo"></Image>
 <p>Welcome, {user.name}</p>

    <Link href="/signup" onClick={async()=> {await authClient.signOut()}} className='btn bg-green-600 text-white font-medium'>LogOut
     </Link>
  </div>
:
  <div className='flex mr-6 justify-center font-semibold items-center gap-4'>
  <Link href="/login" className='btn bg-green-500 text-white font-medium'>LogIn</Link>
    <Link href="/signup" className='btn bg-primary text-white font-medium'>SignUp</Link>
  </div>
}



</div>
            
    );
};

export default NavBar;