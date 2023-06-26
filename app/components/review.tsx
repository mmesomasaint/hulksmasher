'use client'

import { useState, useMemo, useCallback } from 'react'
import { ReviewType } from '../lib/reviews'
import ReviewCard from './review-card'

type ReviewNodeType = {
  reviews: ReviewType[]
}

function Review({ reviews }: ReviewNodeType) {
  const [activePair, setActivePair] = useState<number>(0)
  const MID_ID = reviews.length / 2 - 1

  const pairHandler: (activeID: number) => void = useCallback((activeID: number) => setActivePair(activeID), [])

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

  return (
    <>
      {pairedReviews.map(([pair1, pair2]: ReviewType[], id, list) => {
        const [ENDPOINT, MAIN, STARTPOINT] = [
          'right-[150%]',
          'right-[50%]',
          '-right-[50%]',
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
            className={`grid grid-cols-2 place-items-stretch ${
              hide ? 'hidden' : 'block'
            } absolute inset-y-0 my-auto w-full transform duration-1000 -translate-x-[50%] ${style}`}
          >
            <ReviewCard review={pair1} />
            <ReviewCard review={pair2} />
          </div>
        )
      })}
      <div className='absolute -right-[50%] -translate-x-[50%] bottom-0 w-full flex justify-center items-center gap-3'>
        {pairedReviews.map((pair, id) => (
          <div
            key={pair[0].name}
            className={`w-12 h-2 ${
              activePair === id ? 'bg-red-500' : 'bg-red-500/40'
            } rounded-2xl`}
            onClick={(e) => pairHandler(id)}
          />
        ))}
      </div>
    </>
  )
}

export default Review
