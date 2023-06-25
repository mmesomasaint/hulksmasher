import {useMemo} from 'react'

function Review({reviews}) {
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
}