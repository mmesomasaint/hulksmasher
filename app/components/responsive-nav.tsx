'use client'

import Link from 'next/link'
import { useState, useCallback, Fragment } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Menu, Transition } from '@headlessui/react'

function ResponsiveNav() {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = useCallback(() => setIsOpen((open) => !open), [])

  return (
    <Menu>
      <div>
        <Menu.Button>
        <GiHamburgerMenu className='text-3xl text-black' onClick={handleOpen} />
        </Menu.Button>
        <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0'
                    enterTo='transform opacity-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100'
                    leaveTo='transform opacity-0'>
                      <Menu.Items className='flex bg-zinc-200 w-full flex-col absolute z-10 top-[99%] left-0  justify-evenly items-start gap-7 px-[1%] py-5'>
                        <Menu.Item>
                        {({ active }) => (
        <span className='font-normal text-lg leading-none text-primary'>
          <Link href='/'>Home</Link>
        </span>
                        )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
        <span className='font-normal text-lg leading-none text-black hover:text-gray-600'>
          <Link href='/discover'>Discover</Link>
        </span>
                        )}</Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
        <span className='font-normal text-lg leading-none text-black hover:text-gray-600'>
          <Link href='/patners'>Patners</Link>
        </span>
                        )}</Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
        <span className='font-normal text-lg leading-none text-black hover:text-gray-600'>
          <Link href='/about'>About</Link>
        </span>
                        )}</Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
        <span className='font-normal text-lg leading-none text-black hover:text-gray-600'>
          <Link href='/feedback'>Feedbacks</Link>
        </span>
                        )}</Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
        <span className='font-normal text-lg leading-none text-black hover:text-gray-600'>
          <Link href='/contact'>Contact</Link>
        </span>
                        )}</Menu.Item>
                      </Menu.Items>
        </Transition>
      </div>
    </Menu>
  )
}

export default ResponsiveNav
