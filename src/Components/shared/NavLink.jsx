
"use client"

import Link from 'next/link';


import { usePathname } from 'next/navigation';
import React from 'react';



const NavLink = ({children,href}) => {
    const currentPath= usePathname();
    const isActive = currentPath === href;
    const activeClass = isActive ? 'text-green-700 border-b-2 border-green-700 text-lg font-bold' : '';
    return (
       <Link href={href} className={activeClass}>
         {children}
       </Link>
    );
};

export default NavLink;