import { MdOutlineArrowForwardIos } from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'
import { BsTelephone } from 'react-icons/bs'
import ResponsiveNav from './components/responsive-nav'
import Button from './components/button'

export default function Home() {
  return (
    <main>
      <div className='min-h-screen'>
        <header className='static sm:fixed sm:top-0 sm:inset-x-0 sm:z-50 w-full bg-zinc-200'>
          <div className='max-w-[90rem] w-full'>
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
                    <Link href='/partners'>Partners</Link>
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
              <div className='sticky top-0 z-50 flex justify-between sm:justify-end items-center w-full sm:w-fit gap-3 bg-zinc-200 px-[2%]'>
                <div className='block lg:hidden'>
                  <ResponsiveNav />
                </div>
                <button className='flex-shrink-0 flex justify-center items-center gap-2 w-fit sm:w-10 h-10 px-2 sm:px-0 bg-black rounded-xl'>
                  <BsTelephone className='text-white text-lg sm:text-xl' />
                  <span className='sm:hidden text-white text-base'>
                    Call Us
                  </span>
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
        {/**End of header */}
        <section className='max-w-[90rem] mx-auto'>
          <div className="h-fit sm:h-[40rem] w-full bg-[url('/women-taping.jpg')] bg-no-repeat bg-cover bg-center">
            <div className='w-full h-full bg-gradient-to-br from-amber-500/50 via-red-500/50 to-amber-500/50'>
              <div className='w-full h-full bg-transparent flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center gap-7 p-3 w-fit mt-10'>
                  <div className='text-6xl font-bold text-white leading-tight text-center'>
                    <h1>Comfy Inside</h1>
                    <h1>Fresh &amp; Fitted Outside</h1>
                  </div>
                  <div className='flex flex-col items-center justify-between gap-2 text-lg font-medium text-white leading-none text-center'>
                    <span>
                      Experience the unparalleled comfort, style and
                      self-expression crafted just for you.
                    </span>
                    <span>Let's get you there with just 3 steps.</span>
                  </div>
                  <div className='flex justify-evenly items-center gap-7'>
                    <Button secondary>
                      <span className='flex justify-center items-center gap-2'>
                        <span>Learn More</span>
                        <MdOutlineArrowForwardIos className='text-xl' />
                      </span>
                    </Button>
                    <Button>
                      <span>Request Service</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/**End of showcase */}
        <section></section>
        <section></section>
        <footer></footer>
      </div>
    </main>
  )
}
