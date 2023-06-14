import Header from "./components/header"
import {MdOutlineArrowForwardIos} from 'react-icons/md'

export default function Home() {
  return (
    <main className=''>
      <Header />
          <section className='max-w-[90rem] mx-auto'>
            <div className="h-fit md:h-[40rem] w-full bg-zinc-900">
              <div className='flex justify-center items-center h-full'>
                <div className='w-full h-fit pt-32 text-center'>
                  <h1 className='block w-[90%] sm:w-[70%] lg:w-[60%] xl:w-[45%] mx-auto text-4xl md:text-5xl font-bold leading-normal text-white mb-4'>
                    Your One-Stop For <span className='text-primary'>Custom-Made</span>&nbsp;
                    Senators and Footwears
                  </h1>
                  <p className='block w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[40%] mx-auto text-lg md:text-xl lg:text-base font-normal leading-tight text-white mb-8'>
                  Imagine the feeling of slipping into a pair of shoes or wearing a garment that was meticulously crafted just for you. It's a feeling of unparalleled comfort, style, and self-expression. That's precisely the experience we strive to create at Hulksmasher
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
            </div>
          </section>
      <section></section>
      <section></section>
      <footer></footer>
    </main>
  )
}
