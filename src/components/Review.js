import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import ReviewCard from './ReviewCard'

function Review({ reviews }) {

  let { id } = useParams()
  
  const history = useHistory()

  const foundReview = reviews.find(review => review.id === id)

  useEffect(() => {
    if (!foundReview) {
      history.push('/404')
    }
  }, [foundReview])

  if (foundReview) {
    return (
      <ReviewCard 
        key={foundReview.id} 
        book={foundReview.book} 
        author={foundReview.author} 
        text={foundReview.text} 
        rating={foundReview.rating} 
      />
    )
  } else {
    return <p>Oops! Sorry, review not found.</p>
  }
}

export default Review