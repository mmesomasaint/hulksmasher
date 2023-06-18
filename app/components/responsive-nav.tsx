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
        <Menu.Button>
          <GiHamburgerMenu className='text-3xl text-black' />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100 z-[-1]'
          enterFrom='transform translate-x-full'
          enterTo='transform translate-x-0'
          leave='transition ease-in duration-75 z-[-1]'
          leaveFrom='transform translate-x-0'
          leaveTo='transform translate-x-full'
        >
          <Menu.Items className='flex bg-zinc-100 w-full flex-col absolute z-[-1] top-[99%] left-0  justify-evenly items-start pt-5'>
            {links.map(({ address, href }) => (
              <Menu.Item key={`${address}: ${href}`}>
                {({ active }) => (
                  <span className='font-normal text-lg leading-none text-primary px-[2%] py-4 w-full'>
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
