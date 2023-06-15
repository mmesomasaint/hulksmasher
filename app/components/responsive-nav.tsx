'use client'

import Link from 'next/link'
import { Fragment } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Menu, Transition } from '@headlessui/react'

type LinkType = {
  address: string
  href: string
}

const links: LinkType[] = [
  { address: 'Home', href: '/' },
  { address: 'Discover', href: '/discover' },
  { address: 'About', href: '/about' },
  { address: 'Partners', href: '/partners' },
  { address: 'Feedbacks', href: '/feedback' },
  { address: 'Contact', href: '/contact' },
]

function ResponsiveNav() {
  return (
    <Menu>
      <div>
        <Menu.Button className='ml-[1%] lg:m-0'>
          <GiHamburgerMenu className='text-3xl text-black' />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0'
          enterTo='transform opacity-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100'
          leaveTo='transform opacity-0'
        >
          <Menu.Items className='flex bg-zinc-200 w-full flex-col absolute z-10 top-[99%] left-0  justify-evenly items-start gap-7 px-[1%] py-5'>
            {links.map(({ address, href }) => (
              <Menu.Item>
                {({ active }) => (
                  <span className='font-normal text-lg leading-none text-primary'>
                    <Link href={href}>{address}</Link>
                  </span>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </div>
    </Menu>
  )
}

export default ResponsiveNav
