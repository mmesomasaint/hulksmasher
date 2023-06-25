import {useState, useMemo} from 'react'
import { ReviewType } from '../lib/reviews'

type ReviewNodeType = {
  reviews: ReviewType[]
}

function Review({reviews}: ReviewNodeType) {
  const [activePair, setActivePair] = useState<number>(0)
  const MID_ID = reviews.length / 2 - 1

  const pairedReviews: ReviewType[][] = useMemo(() => {
    const list: ReviewType[][] = []
    for(let i = 0; i < reviews.length - 1; i+=2) {
      const _list: ReviewType[] = []
      for(let j = i; j <= i+2; j++) {
        _list.push(reviews[j])
      }
      list.push(_list)
    }
    return list
  }, [])

  return (
    <>
      {
        pairedReviews.map((pair, id, list) => {
          
          const [ENDPOINT, MAIN, STARTPOINT] = [
            'right-[110%]',
            'right-[50%]',
            '-right-[10%]',
          ]

          const PREV: number =
            activePair === 0 ? list.length - 1 : activePair - 1

          const NEXT: number =
            activePair === list.length - 1 ? 0 : activePair + 1

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
            <></>
          )
        })
      }
    </>
  )
}