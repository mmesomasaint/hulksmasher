import { HiArrowSmRight } from 'react-icons/hi'

type HowCardType = {
  title: string
  children: React.ReactNode
}

function HowCard({ title, children }: HowCardType) {
  return (
    <div className='group flex flex-col justify-start items-center gap-5 bg-amber-500/10 hover:bg-transparent shadow-[0_0_20px_-6px_rgb(239_68_68_/_0.55)] hover:shadow-[inset_0_0_30px_-12px_rgb(245_158_11_/_0.55),_0_0_50px_-6px_rgb(239_68_68_/_0.55)] rounded-2xl p-5'>
      <div className='w-20 h-20 flex shrink-0 justify-center items-center rounded-2xl border border-zinc-600'>
        <span className='text-6xl text-red-500 font-extrabold'>1</span>
      </div>
      <span className='text-sm sm:text-base font-semibold text-black group-hover:text-red-500 text-center leading-none'>
        {title}
      </span>
      <span className='text-black text-xs sm:text-sm font-normal leading-tight text-center'>
        {children}
      </span>
      <div className='w-10 h-10 flex justify-center items-center rounded-full bg-transparent group-hover:bg-red-500 border border-red-500/40'>
        <HiArrowSmRight className='text-lg xs:text-xl text-red-500 group-hover:text-white' />
      </div>
    </div>
  )
}

export default HowCard