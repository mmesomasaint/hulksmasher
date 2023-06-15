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
      <header className='fixed top-0 inset-x-0 z-50 w-full bg-gradient-to-b from-zinc-300 via-zinc-300 to-white'>
        <div className='relative max-w-[90rem] mx-auto'>
          <div className='w-[98%] lg:w-[90%] xl:w-[80%] mx-auto py-4'>
            <div className='flex justify-between items-center gap-6'>
              <div className=''>
                <Image
                  src='/imgs/cryptex/logo.png'
                  width={50}
                  height={30}
                  alt='logo'
                />
              </div>
              <div className='col-span-3 flex justify-between items-center gap-7'>
                <div
                  className={`${
                    isOpen ? 'flex bg-white' : 'hidden'
                  } w-full lg:w-fit flex-col lg:flex-row absolute z-10 top-[99%] left-0 lg:static lg:bg-transparent lg:flex justify-evenly items-start lg:items-center gap-7 px-[1%] py-5 lg:p-0`}
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
              <div className='flex justify-center items-center gap-3'>
                <div className='block lg:hidden'>
                  <GiHamburgerMenu
                    className='text-3xl text-white'
                    onClick={handleOpen}
                  />
                </div>
                <button className='flex-shrink-0 flex justify-center items-center w-10 h-10 bg-black rounded-xl'>
                  <BsTelephone className='text-white text-xl' />
                </button>
                <div className='flex flex-col justify-center items-start gap-2'>
                  <span className='font-light text-base leading-none text-black'>Call Us</span>
                  <span className='font-normal text-lg leading-none text-black'>08157832809</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header