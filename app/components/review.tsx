'use client'

import { useState, useMemo } from 'react'
import { ReviewType } from '../lib/reviews'
import ReviewCard from './review-card'

type ReviewNodeType = {
  reviews: ReviewType[]
}

function Review({ reviews }: ReviewNodeType) {
  const [activePair, setActivePair] = useState<number>(0)
  const MID_ID = reviews.length / 2 - 1

  const pairedReviews: ReviewType[][] = useMemo(() => {
    const list: ReviewType[][] = []
    for (let i = 0; i < reviews.length - 1; i += 2) {
      const _list: ReviewType[] = []
      for (let j = i; j <= i + 2; j++) {
        _list.push(reviews[j])
      }
      list.push(_list)
    }

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
    </>
  )
}

export default Review
