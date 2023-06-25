import Image from 'next/image'
import { ReviewType } from "../lib/reviews";
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import { FaQuoteRight } from 'react-icons/fa'
import { IconType } from 'react-icons/lib';

type ReviewCardType = {
  review: ReviewType
}

function ReviewCard({review: {name, role, star, said}}: ReviewCardType) {
  return (
    <div className="flex flex-col justify-start items-start gap-5">
      <div className="grid grid-cols-3 place-items-stretch gap-10">
        <div className="col-span-2 grid grid-cols-2 place-items-stretch">
          <Image src='/asset-tailors.png' width={200} height={200} alt="Review author's avatar" className='rounded-full' />
          <div className='flex flex-col justify-start items-start gap-5'>
            <p className='text-sm sm:text-base font-medium text-black leading-none'>{name}</p>
            <p>{role}</p>
            <div className='flex justify-start items-center gap-1'>
              {[1, 2, 3, 4, 5].map((key) => {
                const Star = ({StarIcon}: {StarIcon: IconType}) => {
                  return (
                    <StarIcon className='text-lg text-amber-500' />
                  )
                }

                if (star > key) {
                  return <Star StarIcon={BsStarFill} />
                } else if (star < key) {
                  return <Star StarIcon={BsStar} />
                } else {
                  return <Star StarIcon={BsStarHalf} />
                }

              })}
            </div>
          </div>
        </div>
        <div>
          <FaQuoteRight className='text-8xl text-red-500/40' />
        </div>
      </div>
      <span className='text-black text-sm sm:text-base font-medium leading-tight'>
        {said}
      </span>
    </div>
  )
}