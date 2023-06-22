import Image from 'next/image'

type CraftCardType = {
  src: string
  title: string
  occasion: string 
}

function CraftCard({src, title, occasion}: CraftCardType) {
  return (
    <div className='rounded-2xl border border-black/40 hover:border-red-500 flex flex-col justify-between items-start'>
      <Image src={src} width={200} height={200} alt='employee' className='flex-grow rounded-t-2xl'/>
      <div className='flex flex-col gap-2 justify-start items-start p-3'>
        <span className='text-sm font-light text-black leading-none'><span className='text-black font-semibold'>Occasion:</span>&nbsp;{occasion}</span>
        <span className='text-sm font-light text-black leading-none'><span className='text-black font-semibold'>Title:</span>&nbsp;{title}</span>
      </div>
    </div>

  )
}

export default CraftCard