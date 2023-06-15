import { MdOutlineArrowForwardIos } from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'
import { BsTelephone } from 'react-icons/bs'
import ResponsiveNav from './components/responsive-nav'

export default function Home() {
  return (
    <main className='min-h-screen'>
      <header className='static sm:fixed sm:top-0 sm:inset-x-0 sm:z-50 w-full bg-zinc-200'>
        <div className='relative max-w-[90rem] w-full'>
          <div className='w-full lg:w-[90%] xl:w-[80%] mx-auto py-4 flex flex-wrap justify-between items-center gap-6'>
            <div className='px-[1%] flex-shrink-0 w-full sm:w-fit'>
              <Image src='/1-shoe.png' width={50} height={30} alt='logo' />
            </div>
            <div className='col-span-3 flex justify-between items-center gap-7'>
              <div className='w-fit flex-row bg-transparent hidden lg:flex justify-evenly items-center gap-7 p-0'>
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
            <div className='sticky top-0 z-50 flex justify-between sm:justify-end items-center w-full sm:w-fit gap-3 bg-zinc-200'>
              <div className='block lg:hidden'>
                <ResponsiveNav />
              </div>
              <button className='flex-shrink-0 flex justify-center items-center gap-2 w-fit sm:w-10 h-10 px-2 sm:px-0 mr-[1%] sm:mr-0 bg-black rounded-xl'>
                <BsTelephone className='text-white text-lg sm:text-xl' />
                <span className='sm:hidden text-white text-base'>Call Us</span>
              </button>
              <div className='hidden sm:flex flex-col justify-center items-start gap-2 mr-[2%] lg:mr-0'>
                <span className='font-light text-base leading-none text-black'>
                  Call Us
                </span>
                <span className='font-normal text-lg leading-none text-black'>
                  08157832809
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className='max-w-[90rem] mx-auto'>
        <div className='relative overflow-hidden h-fit md:h-[40rem] w-full bg-zinc-900'>
          <div className='flex justify-center items-center h-full'>
            <div className='w-full h-fit pt-32 text-center'>
              <h1 className='block w-[90%] sm:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto text-4xl md:text-6xl font-bold leading-loose text-white mb-4'>
                Your Stop For&nbsp;
                <span className='text-primary'>Custom-Made</span>&nbsp;Senators
                and Footwears
              </h1>
              <p className='block w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[40%] mx-auto text-lg md:text-xl lg:text-base font-normal leading-tight text-white mb-8'>
                Imagine the feeling of slipping into a pair of shoes or wearing
                a garment that was meticulously crafted just for you. It's a
                feeling of unparalleled comfort, style, and self-expression.
                That's precisely the experience we strive to create at
                Hulksmasher
              </p>
              <div className='flex justify-center gap-8 items-center'>
                <button className='flex justify-start items-center gap-1 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 border-2 border-primary bg-transparent shadow-sm rounded-full'>
                  <span className='text-lg xs:text-xl lg:text-lg font-medium leading-none text-white'>
                    Learn More
                  </span>
                  <span className='w-fit mx-auto'>
                    <MdOutlineArrowForwardIos className='text-lg xs:text-xl text-white z-20' />
                  </span>
                </button>
                <button className='text-lg xs:text-xl lg:text-lg font-medium leading-none px-4 sm:px-6 py-2 sm:py-3 border-2 border-primary bg-transparent text-white shadow-sm rounded-full'>
                  Request Service
                </button>
              </div>
            </div>
          </div>
          <div className='absolute origin-top-left rotate-45 top-0 z-30 w-full h-full border border-red-500'>
            <div className='relative w-[50%] h-full'>
              <Image
                src='/shirts-display.png'
                fill
                sizes='55vw'
                alt='shirts row'
              />
            </div>
          </div>
          <div className='absolute origin-top-right -rotate-45 top-0 z-30 w-full h-full border border-red-500'>
            <div className='relative w-[50%] ml-[50%] h-full'>
              <Image src='/shirt-one.png' fill sizes='55vw' alt='one shirt' />
            </div>
          </div>
        </div>
      </section>
      <section></section>
      <section></section>
      <footer></footer>
    </main>
  )
}
