"use client"
import React from 'react'
import Link from 'next/link'
import { AiFillBug } from "react-icons/ai";


const NavBar = () => {
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
        className='text-zinc-500 hover:text-zinc-800 transition-colors'
        href={link.href} >{link.label}</Link>)}
        
      </ul>
    </nav>
    </div>
  )
}

export default NavBar
