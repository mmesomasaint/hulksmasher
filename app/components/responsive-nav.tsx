'use client'

import Link from 'next/link'
import { useState, useCallback } from 'react'
function ResponsiveNav() {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = useCallback(() => setIsOpen((open) => !open), [])

  return (
    <div
      className={`${
        isOpen ? 'flex bg-zinc-200' : 'hidden'
      } w-full flex-col absolute z-10 top-[99%] left-0  justify-evenly items-start lg:items-center gap-7 px-[1%] py-5 lg:p-0`}
    >
      <span className='font-normal text-lg leading-none text-primary'>
        <Link href='/'>Home</Link>
      </span>
      <span className='font-normal text-lg leading-none text-black hover:text-gray-600'>
        <Link href='/discover'>Discover</Link>
      </span>
      <span className='font-normal text-lg leading-none text-black hover:text-gray-600'>
        <Link href='/patners'>Patners</Link>
      </span>
      <span className='font-normal text-lg leading-none text-black hover:text-gray-600'>
        <Link href='/about'>About</Link>
      </span>
      <span className='font-normal text-lg leading-none text-black hover:text-gray-600'>
        <Link href='/feedback'>Feedbacks</Link>
      </span>
      <span className='font-normal text-lg leading-none text-black hover:text-gray-600'>
        <Link href='/contact'>Contact</Link>
      </span>
    </div>)
}

export default ResponsiveNav