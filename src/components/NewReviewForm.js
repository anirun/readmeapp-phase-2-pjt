import React, { useState } from 'react'


function NewReviewForm({addReview}) {
    
    const [book, setBook] = useState('')
    const [author, setAuthor] = useState('')
    const [text, setText] = useState('')
    const [rating, setRating] = useState('')

    function handleBook(e) {
        setBook(e.target.value)
    }

    function handleAuthor(e) {
        setAuthor(e.target.value)
    }

    function handleText(e) {
        setText(e.target.value)
    }

    function handleRating(e) {
        setRating(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        addReview({book: book, author: author, text: text, rating: rating})
        setBook('')
        setAuthor('')
        setText('')
        setRating('')
    }


    return (
        <form id="new-review-form" onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Book Title?"
          onChange={handleBook}
          value={book}
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