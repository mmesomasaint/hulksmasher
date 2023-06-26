import Image from 'next/image'
import { ReviewType } from '../lib/reviews'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import { FaQuoteRight } from 'react-icons/fa'
import { IconType } from 'react-icons/lib'

type ReviewCardType = {
  review: ReviewType
}

function ReviewCard({
  review: { imgSrc, name, role, star, said },
}: ReviewCardType) {
  return (
    <div className='flex flex-col justify-start items-start gap-5 h-fit my-auto p-5 mx-10 bg-amber-500/10 shadow-[0_0_20px_-6px_rgb(239_68_68_/_0.55)] rounded-2xl'>
      <div className='grid grid-cols-3 place-items-end items-start gap-10'>
        <div className='col-span-2 grid grid-cols-2 gap-5 place-items-stretch'>
          <Image
            src={imgSrc}
            width={120}
            height={120}
            alt="Review author's avatar"
            className='rounded-full'
          />
          <div className='flex flex-col justify-center items-start gap-3'>
            <div className='flex flex-col justify-start items-start'>
              <p className='text-sm sm:text-base font-semibold text-red-500 leading-none'>
                {name}
              </p>
              <p className='text-xs sm:text-sm font-light text-black leading-none'>
                {role}
              </p>
            </div>
            <div className='flex justify-start items-center gap-1'>
              {[1, 2, 3, 4, 5].map((key) => {
                const Star = ({ StarIcon }: { StarIcon: IconType }) => {
                  return <StarIcon className='text-lg text-amber-500' />
                }

                if (star >= key) return <Star key={key} StarIcon={BsStarFill} />
                else if (star < key) return <Star key={key} StarIcon={BsStar} />
                else return <Star key={key} StarIcon={BsStarHalf} />
              })}
            </div>
          </div>
        </div>
        <div>
          <FaQuoteRight className='text-8xl text-red-500/40' />
        </div>
      </div>
      <span className='text-black text-sm sm:text-base font-normal leading-tight'>
        {said}
      </span>
    </div>
  )
}

export default ReviewCard
