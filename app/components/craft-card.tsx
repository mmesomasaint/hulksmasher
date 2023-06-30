import Image from 'next/image'

type CraftCardType = {
  src: string
  title: string
  occasion: string
}

function CraftCard({ src, title, occasion }: CraftCardType) {
  return (
    <div className='rounded-2xl flex flex-col justify-between items-start bg-amber-500/10 shadow-[0_0_20px_-6px_rgb(239_68_68_/_0.55)]'>
      <Image
        src={src}
        width={200}
        height={200}
        alt='employee'
        className='flex-grow rounded-t-2xl'
      />
      <div className='flex flex-col gap-2 justify-start items-start p-3'>
        <span className='flex flex-col items-start justify-start'>
          <span className='text-black font-semibold leading-none'>Occasion:</span>&nbsp;
            <p className='text-black text-xs sm:text-sm font-normal leading-snug'>{occasion}</p>
        </span>
        <span className='flex flex-col items-start justify-start'>
          <span className='text-black font-semibold leading-none'>Title:</span>&nbsp;
            <p className='text-black text-xs sm:text-sm font-normal leading-snug'>{title}</p>
        </span>
      </div>
    </div>
  )
}

export default CraftCard
