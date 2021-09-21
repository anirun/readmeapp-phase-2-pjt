import React, { useState } from 'react'

function NewReviewForm({addReview}) {
    
    const [reviewForm, setReviewForm] = useState({
      book: '',
      author: '',
      text: '',
      rating: 0
    })

    function handleSubmit(event) {
        event.preventDefault()
        addReview(reviewForm)
        setReviewForm({
          book: '',
          author: '',
          text: '',
          rating: 0
        })
    }

    return (
        <form id="new-review-form" onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Book Title?"
          onChange={e => setReviewForm({...reviewForm, book: e.target.value})}
          value={reviewForm.book}
        />
  
        <br/>

        <input
          type="text"
          placeholder="Author?"
          onChange={e => setReviewForm({...reviewForm, author: e.target.value})}
          value={reviewForm.author}
        />
  
        <br/>

        <input
          type="text"
          placeholder="Write your review..."
          onChange={e => setReviewForm({...reviewForm, text: e.target.value})}
          value={reviewForm.text}
        />
  
        <br/>

        <input
          type="number"
          placeholder="Rating out of 5?"
          onChange={e => setReviewForm({...reviewForm, rating: e.target.value})}
          value={reviewForm.rating}
          max="5"
          min="0"
          step="0.5"
        />
  
        <br/>

  
        <input
          type="submit"
          value="Add Review"
        />
  
      </form>
    )
}

export default NewReviewForm