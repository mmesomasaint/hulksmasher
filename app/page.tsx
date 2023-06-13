import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = useCallback(() => setIsOpen((open) => !open), [])

  return (
    <main className="">
    <header className='absolute w-full bg-gradient-to-b from-zinc-900 via-zinc-900 to-black'>
    <div className='relative max-w-[90rem] mx-auto'>
      <div className='w-[98%] lg:w-[90%] xl:w-[80%] mx-auto py-4 md:py-7'>
        <div className='flex justify-between items-center gap-6'>
          <div className=''>
            <Image
              src='/imgs/cryptex/logo.png'
              width={50}
              height={30}
              alt='logo'
            />
          </div>
          <div className='flex justify-between items-center gap-7'>
            <div
              className={`${
                isOpen ? 'flex bg-black' : 'hidden'
              } w-full lg:w-fit flex-col lg:flex-row absolute z-10 top-[99%] left-0 lg:static lg:bg-transparent lg:flex justify-evenly items-start lg:items-center gap-7 px-[1%] py-5 lg:p-0`}
            >
              <span className='font-normal text-xl leading-none text-primary scale-105 underline underline-offset-[6px]'>
                <Link href='/'>Home</Link>
              </span>
              <span className='font-normal text-xl leading-none text-white hover:text-gray-300'>
                <Link href='/discover'>Discover</Link>
              </span>
              <span className='font-normal text-xl leading-none text-white hover:text-gray-300'>
                <Link href='/patners'>Patners</Link>
              </span>
              <span className='font-normal text-xl leading-none text-white hover:text-gray-300'>
                <Link href='/about'>About</Link>
              </span>
              <span className='font-normal text-xl leading-none text-white hover:text-gray-300'>
                <Link href='/feedback'>Feedbacks</Link>
              </span>
              <span className='font-normal text-xl leading-none text-white hover:text-gray-300'>
                <Link href='/contact'>Contact</Link>
              </span>
            </div>
          </div>
          <div className='flex justify-center items-center gap-7'>
            <div className='block lg:hidden'>
              <GiHamburgerMenu
                className='text-3xl text-white'
                onClick={handleOpen}
              />
            </div>
            <button className='text-white text-base md:text-lg py-2 md:py-3 px-4 md:px-6 font-medium leading-none bg-transparent border-2 border-primary rounded-full'>
              Connect Wallet
            </button>
            <div className='hidden xs:flex justify-center items-center gap-5'>
              <BsFillBagFill className='text-white text-lg md:text-xl' />
              <BsFillPersonFill className='text-white text-lg md:text-xl' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
      <section></section>
      <section></section>
      <section></section>
      <footer></footer>
    </main>
  )
}
