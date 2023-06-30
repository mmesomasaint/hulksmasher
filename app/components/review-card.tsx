import Image from 'next/image'
import { ReviewType } from '../lib/reviews'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import { ImQuotesRight } from 'react-icons/im'
import { IconType } from 'react-icons/lib'

type ReviewCardType = {
  review: ReviewType
}

function ReviewCard({
  review: { imgSrc, name, role, star, said },
}: ReviewCardType) {
  return (
    <div className='relative flex flex-col justify-start items-start gap-3 h-fit my-auto p-5 mx-3 xl:mx-10 bg-amber-500/10 shadow-[0_0_20px_-6px_rgb(239_68_68_/_0.55)] rounded-2xl'>
      <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 items-start gap-5'>
        <div className='col-span-1 xs:col-span-2 grid grid-cols-1 xs:grid-cols-3 sm:grid-cols-2 gap-1 place-items-stretch'>
          <Image
            src={imgSrc}
            width={120}
            height={120}
            alt="Review author's avatar"
            className='rounded-full'
          />
          <div className='col-span-2 sm:col-span-1 flex flex-col justify-center items-start gap-3'>
            <div className='flex flex-col justify-start items-start gap-1 sm:gap-0'>
              <p className='text-sm sm:text-base font-semibold text-red-500 leading-none'>
                {name}
              </p>
              <p className='text-xs sm:text-sm font-light text-black leading-none'>
                {role}
              </p>
            </div>
            <div className='flex justify-start items-center gap-1'>
              {[1, 2, 3, 4, 5].map((key) => {
                if (star >= key) return <Star key={key} StarIcon={BsStarFill} />
                else if (star < key) return <Star key={key} StarIcon={BsStar} />
                else return <Star key={key} StarIcon={BsStarHalf} />
              })}
            </div>
          </div>
        </div>
        <div className='absolute right-0 bottom-[15%] md:static'>
          <ImQuotesRight className='text-8xl lg:text-9xl text-red-500/20 -scale-y-100' />
        </div>
      </div>
      <span className='text-black text-sm sm:text-base font-normal leading-tight'>
        {said}
      </span>
    </div>
  )
}

function Star({ StarIcon }: { StarIcon: IconType }) {
  return <StarIcon className='text-lg text-amber-500' />
}

export default ReviewCard
