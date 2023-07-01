import { MdOutlineArrowForwardIos } from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'
import {
  BsTelephone,
  BsWhatsapp,
  BsEnvelopeFill,
  BsFacebook,
  BsInstagram,
} from 'react-icons/bs'
import ResponsiveNav from './components/responsive-nav'
import Button from './components/button'
import CraftCard from './components/craft-card'
import PastWorks from './lib/past-works'
import TitleBox from './components/title-box'
import HowCard from './components/how-card'
import Review from './components/review'
import Reviews from './lib/reviews'
import Contact from './components/contact'

export default function Home() {
  return (
    <main>
      <div className='min-h-screen'>
        <header className='fixed top-0 inset-x-0 z-50 w-full bg-zinc-100'>
          <div className='max-w-[90rem] mx-auto w-full'>
            <div className='w-full lg:w-[90%] xl:w-[80%] mx-auto py-4 flex flex-wrap justify-between items-center gap-0 sm:gap-6'>
              <div className='px-[1%] shrink sm:flex-shrink-0 sm:w-fit'>
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
              <div className='flex justify-between sm:justify-end items-center grow sm:w-fit gap-3 bg-zinc-100 px-[2%]'>
                <div className='block lg:hidden'>
                  <ResponsiveNav />
                </div>
                <Button>
                  <span className='flex-shrink-0 flex justify-center items-center gap-2 w-fit'>
                    <BsTelephone className='text-white text-lg sm:text-xl' />
                    <span className='sm:hidden text-white text-base'>
                      Call Us
                    </span>
                  </span>
                </Button>
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
        <section className="h-fit sm:h-[40rem] w-full bg-[url('/women-taping.jpg')] bg-no-repeat bg-cover bg-center">
          <div className='w-full h-full bg-gradient-to-br from-amber-500/50 via-red-500/50 to-amber-500/50'>
            <div className='max-w-[90rem] mx-auto h-full'>
              <div className='w-full h-full bg-transparent flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center gap-7 p-3 w-fit mt-20 sm:mt-10 mb-24 sm:mb-0'>
                  <div className='text-5xl sm:text-6xl font-bold text-white leading-tight text-center'>
                    <h1>Comfy Inside</h1>
                    <h1>Fresh &amp; Fitted Outside</h1>
                  </div>
                  <div className='flex flex-col items-center justify-between gap-2 text-base sm:text-lg font-medium text-white leading-tight text-center'>
                    <span>
                      Experience the unparalleled comfort, style and
                      self-expression crafted just for you.
                    </span>
                    <span>Let's get you there with just 3 steps.</span>
                  </div>
                  <div className='flex flex-col xs:flex-row justify-evenly items-center gap-7'>
                    <Button secondary>
                      <span className='flex justify-center items-center gap-2'>
                        <span>Learn More</span>
                        <MdOutlineArrowForwardIos className='text-lg xs:text-xl' />
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
        <section className=' bg-zinc-100 relative h-fit overflow-hidden'>
          <div className='max-w-[90rem] mx-auto relative h-fit'>
            <div className='w-full h-fit'>
              <div className='w-full lg:w-[90%] xl:w-[80%] mx-auto flex flex-wrap justify-between items-center gap-6 py-10 sm:py-20'>
                <div className='w-full h-fit grid grid-cols-1 md:grid-cols-2 place-content-stretch gap-7 px-7'>
                  <div className='relative h-full px-[2%] sm:px-0'>
                    <Image
                      src='/workplace-artisan.jpg'
                      width={250}
                      height={200}
                      alt='about industry'
                      className='block relative md:absolute top-0 -translate-x-[50%] md:translate-x-0 left-[50%] md:left-0'
                    />
                    <Image
                      src='/classy-man-tailor-shop.jpg'
                      width={450}
                      height={400}
                      alt='about industry employees'
                      className='block relative md:absolute top-0 md:top-[160px] -translate-x-[50%] left-[50%] md:-translate-x-full md:left-full'
                    />
                  </div>
                  <div className='flex order-first md:order-none flex-col justify-start items-start gap-5 px-[2%] md:px-10'>
                    <TitleBox
                      intro='What We Are About'
                      main='We Dress Our Clients For Any Occasion'
                      pos='LEFT'
                    >
                      We take pride in our work and the satisfaction of our
                      clients. For every type of cloth and material we turn them
                      into the best experience.
                    </TitleBox>
                    <div className='py-3 flex justify-start items-start gap-3'>
                      <div className='w-12 h-12 flex shrink-0 justify-center items-center rounded-2xl border border-zinc-600'></div>
                      <div className='flex flex-col justify-start items-start gap-2'>
                        <span className='text-sm sm:text-base font-semibold text-amber-600 leading-none'>
                          Our Mission
                        </span>
                        <span className='text-black text-xs sm:text-sm font-normal leading-tight'>
                          Make the experience in every cloth and footwear worth
                          remembering for comfy &amp; fitness.
                        </span>
                      </div>
                    </div>
                    <div className='py-3 flex justify-start items-start gap-3'>
                      <div className='w-12 h-12 flex shrink-0 justify-center items-center rounded-2xl border border-zinc-600'></div>
                      <div className='flex flex-col justify-start items-start gap-2'>
                        <span className='text-sm sm:text-base font-semibold text-amber-600 leading-none'>
                          Our Vision
                        </span>
                        <span className='text-black text-xs sm:text-sm font-normal leading-tight'>
                          Make the experience in every cloth and footwear worth
                          remembering for comfy &amp; fitness.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/**End of about */}
        <section className='bg-zinc-100'>
          <div className='max-w-[90rem] mx-auto'>
            <div className='w-full lg:w-[90%] xl:w-[80%] mx-auto flex flex-col justify-start items-center gap-5 py-10 sm:py-20'>
              <TitleBox
                intro='What We Have Done'
                main='Our Crafts Are Custom-made To Fit Client &amp; Occasion'
                pos='CENTER'
              >
                We take pride in our work and the satisfaction of our clients.
                For every type of cloth and material we turn them into the best
                experience.
              </TitleBox>
              <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 place-items-stretch gap-5 sm:gap-10 mt-5 px-[2%] lg:px-0'>
                {PastWorks.map(({ src, occasion, title }) => (
                  <CraftCard
                    key={`${src} ${occasion} ${title}`}
                    src={src}
                    title={title}
                    occasion={occasion}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        {/**End of portfolio */}
        <section className='bg-zinc-100'>
          <div className='max-w-[90rem] mx-auto'>
            <div className='w-full lg:w-[90%] xl:w-[80%] mx-auto flex flex-col justify-start items-center gap-5 py-10 sm:py-20'>
              <TitleBox
                intro='How It Works'
                main='Bring Your Desire To Reality With Just 4 Steps'
                pos='CENTER'
              >
                We take pride in our work and the satisfaction of our clients.
                For every type of cloth and material we turn them into the best
                experience.
              </TitleBox>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-2 xs:gap-5 lg:gap-10 place-items-stretch mt-10 px-[2%] lg:px-0'>
                <HowCard title='Request Service' icon='1'>
                  Contact us with design or description.
                </HowCard>
                <HowCard title='Get Measurements' icon='2'>
                  We come to you and take your measurements.
                </HowCard>
                <HowCard title='Build Process' icon='3'>
                  Your Design &amp; Desire is brought to life.
                </HowCard>
                <HowCard title='Delivery' icon='4'>
                  Get your package in time for the occasion.
                </HowCard>
              </div>
            </div>
          </div>
        </section>
        {/**End of how it works */}
        <section className='bg-zinc-100'>
          <div className='max-w-[90rem] mx-auto'>
            <div className='w-full lg:w-[90%] xl:w-[80%] mx-auto grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 place-items-stretch gap-5 xl:gap-32 py-10 sm:py-20'>
              <div className='flex flex-col justify-start items-start gap-5 px-[2%] lg:px-0'>
                <TitleBox
                  intro='Take The 1st Step'
                  main='Got A Design or Pattern Ready?'
                  pos='LEFT'
                >
                  We take pride in our work and the satisfaction of our clients.
                </TitleBox>
                <Button>Request Service</Button>
              </div>
              <div className='md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-2 items-center px-[2%] lg:px-0'>
                <div className='hidden md:block'>
                  <Image
                    src='/side-view-woman-wearing-native-attire.jpg'
                    width={550}
                    height={200}
                    alt='Old vintage hand sewing machine'
                    className=''
                  />
                </div>
                <div className=''>
                  <Image
                    src='/marriage-woman.jpg'
                    width={550}
                    height={200}
                    alt='Old vintage hand sewing machine'
                    className=''
                  />
                </div>
                <div>
                  <Image
                    src='/marriage-man-woman.jpg'
                    width={550}
                    height={200}
                    alt='Traditional wedded man and woman'
                    className=''
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/**End of get yours */}
        <section className='bg-zinc-100'>
          <div className='max-w-[90rem] mx-auto'>
            <div className='w-full lg:w-[90%] xl:w-[80%] mx-auto flex flex-col justify-start items-center gap-5 py-10 sm:py-20'>
              <TitleBox
                intro='What They Are Saying'
                main='Client Feedback On Our Work'
                pos='CENTER'
              >
                We take pride in our work and the satisfaction of our clients.
                For every type of cloth and material we turn them into the best
                experience.
              </TitleBox>
              <div className='relative flex overflow-hidden h-[25rem] sm:h-[20rem] w-full'>
                <div className='flex-shrink-0 w-full' />
                <div className='flex-shrink-0 w-full'>
                  <Review reviews={Reviews} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/**End of feedback */}
        <section className='bg-zinc-100'>
          <div className='max-w-[90rem] mx-auto'>
            <div className='w-full lg:w-[90%] xl:w-[80%] mx-auto flex flex-col justify-start items-center gap-5 py-10 sm:py-20'>
              <TitleBox
                intro="Let's Start Now"
                main='You Are Just 1 Click Away'
                pos='CENTER'
              >
                We take pride in our work and the satisfaction of our clients.
                For every type of cloth and material we turn them into the best
                experience.
              </TitleBox>
              <Contact />
            </div>
          </div>
        </section>
        {/**End of contact */}
        <footer className='bg-zinc-500'>
          <div className='w-full lg:w-[90%] xl:w-[80%] mx-auto pt-10 sm:pt-20 pb-5 px-[2%] lg:px-0'>
            <div className='grid grid-cols-1 md:grid-cols-3 place-items-stretch items-start gap-16 mb-8'>
              <div className='flex flex-col justify-start items-start gap-5'>
                <Image src='/1-shoe.png' width={80} height={60} alt='logo' />
                <span className='text-white text-sm sm:text-base font-medium leading-tight'>
                  We take pride in our work and the satisfaction of our clients.
                  For every type of cloth and material we turn them into the
                  best experience.
                </span>
                <div className='flex justify-evenly items-center gap-3'>
                  <BsTelephone className='text-amber-500 text-xl sm:text-2xl' />
                  <BsWhatsapp className='text-amber-500 text-xl sm:text-2xl' />
                  <BsEnvelopeFill className='text-amber-500 text-xl sm:text-2xl' />
                  <BsFacebook className='text-amber-500 text-xl sm:text-2xl' />
                  <BsInstagram className='text-amber-500 text-xl sm:text-2xl' />
                </div>
              </div>
              <div className='p-0 md:p-3 grid grid-cols-1 xs:grid-cols-3 col-span-2 gap-10 place-items-stretch'>
                <div className='flex flex-col gap-5 items-start justify-start'>
                  <h3 className='text-white text-sm sm:text-base font-semibold underline underline-offset-8 leading-none'>
                    QUICK LINKS
                  </h3>
                  <ul className='flex flex-col gap-3 items-start justify-start'>
                    <li className='text-gray-200 text-sm sm:text-base'>Home</li>
                    <li className='text-gray-200 text-sm sm:text-base'>
                      Portfolio
                    </li>
                    <li className='text-gray-200 text-sm sm:text-base'>
                      Submit Pattern
                    </li>
                    <li className='text-gray-200 text-sm sm:text-base'>
                      Contact Us
                    </li>
                    <li className='text-gray-200 text-sm sm:text-base'>FAQs</li>
                  </ul>
                </div>
                <div className='flex flex-col gap-5 items-start justify-start'>
                  <h3 className='text-white text-sm sm:text-base font-semibold underline underline-offset-8 leading-none'>
                    SERVICES
                  </h3>
                  <ul className='flex flex-col gap-3 items-start justify-start'>
                    <li className='text-gray-200 text-sm sm:text-base'>
                      Start Design
                    </li>
                    <li className='text-gray-200 text-sm sm:text-base'>
                      Designing & Patterning
                    </li>
                    <li className='text-gray-200 text-sm sm:text-base'>
                      Submit Pattern
                    </li>
                    <li className='text-gray-200 text-sm sm:text-base'>
                      Custume Management
                    </li>
                    <li className='text-gray-200 text-sm sm:text-base'>
                      Bulk Production{' '}
                    </li>
                    <li className='text-gray-200 text-sm sm:text-base'>
                      Graphics
                    </li>
                  </ul>
                </div>
                <div className='flex flex-col gap-5 items-start justify-start'>
                  <h3 className='text-white text-sm sm:text-base font-semibold underline underline-offset-8 leading-none'>
                    QUICK LINKS
                  </h3>
                  <ul className='flex flex-col gap-3 items-start justify-start'>
                    <li className='text-gray-200 text-sm sm:text-base'>
                      Launch Complain
                    </li>
                    <li className='text-gray-200 text-sm sm:text-base'>
                      Portfolio
                    </li>
                    <li className='text-gray-200 text-sm sm:text-base'>
                      Dress Ups
                    </li>
                    <li className='text-gray-200 text-sm sm:text-base'>
                      Contact Us
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap md:flex-nowrap justify-start md:justify-center items-center gap-5 pt-5 border-t border-gray-400'>
              <span className='text-white text-sm sm:text-base font-medium leading-tight'>
                &copy; 2023 Hulksmasher
              </span>
              <span className='text-white text-sm sm:text-base font-semibold'>
                &middot;
              </span>
              <span className='text-white text-sm sm:text-base font-medium leading-tight'>
                Designed By&nbsp;
                <span className='underline underline-offset-4'>
                  Mmesoma Saint
                </span>
              </span>
              <span className='text-white text-sm sm:text-base font-semibold'>
                &middot;
              </span>
              <span className='text-white text-sm sm:text-base font-medium leading-tight underline underline-offset-4'>
                View Source
              </span>
            </div>
          </div>
        </footer>
        {/**End of footer */}
      </div>
    </main>
  )
}
