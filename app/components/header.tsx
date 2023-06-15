'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsTelephone } from 'react-icons/bs'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = useCallback(() => setIsOpen((open) => !open), [])

  return (
    <header className='sm:fixed sm:top-0 sm:inset-x-0 sm:z-50 w-full bg-zinc-200'>
      <div className='relative max-w-[90rem] w-[98%] lg:w-[90%] xl:w-[80%] mx-auto py-4 flex flex-wrap justify-between items-center gap-6'>
        <div className='flex-shrink-0 w-full sm:w-fit'>
          <Image
            src='/1-shoe.png'
            width={50}
            height={30}
            alt='logo'
          />
        </div>
        <div className='col-span-3 flex justify-between items-center gap-7'>
          <div
            className='w-fit flex-row bg-transparent hidden lg:flex justify-evenly items-center gap-7 p-0'
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
          </div>
        </div>
        <div className='sticky top-0 z-50 flex justify-between sm:justify-center items-center w-full sm:w-fit gap-3 bg-zinc-200'>
          <div className='block lg:hidden'>
            <GiHamburgerMenu
              className='text-3xl text-black'
              onClick={handleOpen}
            />
          </div>
          <button className='flex-shrink-0 flex justify-center items-center gap-2 w-fit sm:w-10 h-10 px-2 sm:px-0 bg-black rounded-xl'>
            <BsTelephone className='text-white text-lg sm:text-xl' />
            <span className='sm:hidden text-white text-base'>Call Us</span>
          </button>
          <div className='hidden sm:flex flex-col justify-center items-start gap-2'>
            <span className='font-light text-base leading-none text-black'>
              Call Us
            </span>
            <span className='font-normal text-lg leading-none text-black'>
              08157832809
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header