"use client";
import React from 'react'
import Link from 'next/link'
import { AiFillBug } from "react-icons/ai";

//usePathname is used to get the current path
import { usePathname } from 'next/navigation';
//classname package is used to conditionally join classNames together
import classNames from 'classnames';


const NavBar = () => {

  const currentPath = usePathname();
  const links =[
    {label: "Dashboard", href: "/"},
    {label: "Issues", href: "/issues"},
  ]
  return (
    <div className=''>
    <nav className='flex items-center space-x-4 border-b border-green-300 py-5 px-5 mb-5'>
      <Link href="/"><AiFillBug/></Link>
      <ul className='list-none flex space-x-4'>
        {links.map(link => 
        <Link 
        key={link.href} 
        className=
        {classNames({
          'hover:text-zinc-800 transition-colors': true,
          'text-zinc-950': link.href === currentPath,
          'text-zinc-500': link.href !== currentPath,
        }
        )
      }
        href={link.href} >{link.label}</Link>)}
      </ul>
    </nav>
    </div>
  )
}

export default NavBar
