'use client'

import { useState, useMemo, useCallback } from 'react'
import { ReviewType } from '../lib/reviews'
import ReviewCard from './review-card'
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md'

type ReviewNodeType = {
  reviews: ReviewType[]
}

function Review({ reviews }: ReviewNodeType) {
  const [activePair, setActivePair] = useState<number>(0)
  const MID_ID = reviews.length / 2 - 1

  const pairedReviews: ReviewType[][] = useMemo(() => {
    const list: ReviewType[][] = []

    // Group the reviews in two's.
    for (let i = 0; i < reviews.length - 1; i += 2) {
      const _list: ReviewType[] = []
      for (let j = i; j <= i + 2; j++) {
        _list.push(reviews[j])
      }
      list.push(_list)
    }

    // Duplicate the list if size is less than 3.
    while (list.length < 3) list.push(...list)

    return list
  }, [])

  const movePairLeft: () => void = useCallback(
    () =>
      setActivePair((prev) =>
        prev === 0 ? pairedReviews.length - 1 : prev - 1
      ),
    []
  )

  const movePairRight: () => void = useCallback(
    () =>
      setActivePair((prev) =>
        prev === pairedReviews.length - 1 ? 0 : prev + 1
      ),
    []
  )

  return (
    <>
      {pairedReviews.map(([pair1, pair2]: ReviewType[], id, list) => {
        const [ENDPOINT, MAIN, STARTPOINT] = [
          'right-[100%]',
          'right-[0%]',
          '-right-[100%]',
        ]

        const PREV: number = activePair === 0 ? list.length - 1 : activePair - 1

        const NEXT: number = activePair === list.length - 1 ? 0 : activePair + 1

        let style: string = `${STARTPOINT}`
        let hide: boolean = false

        // Handle the style to use on each avatar based on activePair
        if (id === activePair) {
          style = `${MAIN}`
        } else if (id === NEXT) {
          style = `${STARTPOINT}`
        } else if (id === PREV) {
          style = `${ENDPOINT}`
        } else {
          hide = true

          // Balancing - Make sure the activePair is at the center.
          if (activePair < MID_ID && id > activePair + MID_ID) {
            style = `${ENDPOINT}`
          } else if (activePair > MID_ID && id < activePair - MID_ID) {
            style = `${STARTPOINT}`
          }
        }

        return (
          <div
            key={`${pair1.name}-${pair2.name}`}
            className={`grid grid-cols-2 place-items-stretch ${
              hide ? 'hidden' : 'block'
            } absolute inset-y-0 my-auto w-full transform duration-1000 ${style}`}
          >
            <ReviewCard review={pair1} />
            <ReviewCard review={pair2} />
          </div>
        )
      })}
      <div className='absolute -right-[50%] -translate-x-[50%] bottom-0 w-full flex justify-center items-center gap-3'>
        {pairedReviews.map((pair, id) => (
          <button
            key={`${pair[0].name}-${pair[1].name}`}
            className={`border ${
              activePair === id
                ? 'bg-red-500 border-red-500 w-4 h-4'
                : 'border-red-500/40 w-[0.5rem] h-[0.5rem]'
            } rounded-full transform duration-1000`}
          />
        ))}
      </div>
      <div className='absolute -inset-x-0 top-1/2 -translate-y-[50%] z-30 px-2 w-full bg-transparent flex justify-between items-center gap-20'>
        <ControlBtn handler={movePairLeft}>
          <MdOutlineArrowBackIos className='text-lg text-white' />
        </ControlBtn>
        <ControlBtn handler={movePairRight}>
          <MdOutlineArrowForwardIos className='text-lg text-white' />
        </ControlBtn>
      </div>
    </>
  )
}

function ControlBtn({
  children,
  handler,
}: {
  children: React.ReactNode
  handler: () => void
}) {
  return (
    <button
      className='flex justify-center items-center w-12 h-12 rounded-full bg-amber-500 transform duration-100 active:scale-[1.10]'
      onClick={handler}
    >
      {children}
    </button>
  )
}

export default Review
